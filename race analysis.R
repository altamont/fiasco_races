library(caret)
library(dplyr)
library(lubridate)
library(party)
library(purrr)
library(randomForest)
library(rvest)
library(stringr)
library(tree)


getTimesInSeconds <- function(x){
  if(str_count(x, pattern = ":") == 1){
    return(lubridate::period_to_seconds(lubridate::ms(x)))
  }else{
    return(lubridate::period_to_seconds(lubridate::hms(x)))
  }
}


#define a function to help convert the HTML data to a useful dataframe
dataCleansing <- function(x, race_number = 0,  nrow_to_remove = 0){
  #get rid of the last 2 columns
  x <- x[,1:(ncol(x)-2)]
  
  #fix column names
  colnames(x) <- c("Cat", "Position", "Rider", "Time", "Avg_WKG", "Avg_W", "Normalized_W", "WKG_20m", "WKG_5m", "WKG_1m", "WKG_30s", "WKG_15s", "Weight", "Age", "Avg_Hr", "Max_Hr", "Height")
  
  #icons for the first 3 positions. need to fix.  A bunch of other changes, easier to do outside dplyr
  x$Position <- 1:nrow(x)
  x$Avg_WKG <- as.numeric(gsub(x = x$Avg_WKG, pattern = "w/kg", replacement = ""))
  x$Avg_W <- as.numeric(gsub(x = x$Avg_W, pattern = "w", replacement = ""))
  x$Normalized_W <- as.numeric(gsub(x = x$Normalized_W, pattern = "w", replacement = ""))
  x$WKG_20m<- as.numeric(gsub(x = x$WKG_20m, pattern = "w/kg", replacement = ""))
  x$WKG_5m<- as.numeric(gsub(x = x$WKG_5m, pattern = "w/kg", replacement = ""))
  x$WKG_1m<- as.numeric(gsub(x = x$WKG_1m, pattern = "w/kg", replacement = ""))
  x$WKG_30s<- as.numeric(gsub(x = x$WKG_30s, pattern = "w/kg", replacement = ""))
  x$WKG_15s<- as.numeric(gsub(x = x$WKG_15s, pattern = "w/kg", replacement = ""))
  x$Weight <- as.numeric(gsub(x = x$Weight, pattern = "kg", replacement = ""))
  x$Age <- as.factor(x$Age)
  x$Avg_Hr <- as.numeric(gsub(x = x$Avg_Hr, pattern = "bpm", replacement = ""))
  x$Max_Hr <- as.numeric(gsub(x = x$Max_Hr, pattern = "bpm", replacement = ""))
  x$Height <- as.numeric(gsub(x = x$Height, pattern = "cm", replacement = ""))
  
  time_chr <- map_chr(strsplit(x$Time, "\\+"), 1)
  x$Time <- map_dbl(time_chr, getTimesInSeconds)
  x$Rel_Time <- x$Time/x$Time[1]
  rm(time_chr)
  
  x <- x[1:(nrow(x)-nrow_to_remove),]
  
  #now dplyr
  x <- x %>%
    mutate(
      Round = 1,
      Race_Number = race_number,
      Top_10 = as.factor(ifelse(Position <= 10, "Yes", "No")),
      Top_20 = as.factor(ifelse(Position <= 20, "Yes", "No")),
      Normalized_WKG = round(Normalized_W / Weight, 2)
    ) %>%
    select(
      Round,
      Race_Number,
      Cat,
      Rider,
      Position,
      Top_10,
      Top_20,
      Time,
      Rel_Time,
      Weight,
      Height,
      Age,
      Avg_Hr,
      Max_Hr,
      Avg_WKG,
      Avg_W,
      Normalized_WKG,
      Normalized_W,
      everything()
    ) %>%
    mutate(
      W_20m = WKG_20m * Weight,
      W_5m = WKG_5m * Weight,
      W_1m = WKG_1m * Weight,
      W_30S = WKG_30s * Weight,
      W_15s = WKG_15s * Weight
    )
  
  return(x)
}

data_files <- list(
  #"ZRL_Race_1.html",
  #"ZRL_Race_2.html",
  #"ZRL_Race_3.html",
  #"ZRL_Race_4.html",
  #"ZRL_Race_5.html",
  "ZRL_2024-2025_B_Round1_Race2.html")

getRaceHTMLData <- function(x){
  read_html(paste0("data/", x)) %>%
    html_element("table") %>%
    html_table()
}

race_html_data <- lapply(data_files, getRaceHTMLData)

race_data <- lapply(race_html_data, dataCleansing)
race_data <- purrr::map2_dfr(.x = race_html_data, .y = c(1), .f = dataCleansing)


race_model_data <- race_data %>%
  select(-Round, -Race_Number, -Cat, -Rider, -Position, -Normalized_W, -Normalized_WKG, -Time, -Rel_Time) %>%
  na.omit()

set.seed(100)
train <- sample(1:nrow(race_model_data), size = round(0.75*nrow(race_model_data)))
train_data <- race_model_data[train,]
test_data <- race_model_data[-train,]


# classification tree -----------------------------------------------------
ctree_race <- ctree(formula = Top_20~., data = train_data)

#check training prediction
train_predict <- predict(ctree_race,train_data,type="response")
table(train_predict,train_data$Top_20)
mean(train_predict != train_data$Top_20) * 100

test_predict <- predict(ctree_race, test_data, type="response")
table(test_predict,test_data$Top_20)
mean(test_predict != test_data$Top_20) * 100
plot(ctree_race)



# random forest -----------------------------------------------------------
rf_race <- randomForest(Top_20~., data = train_data)

#check training prediction
train_predict <- predict(rf_race,train_data)
confusionMatrix(train_predict, train_data$Top_20)

test_predict <- predict(rf_race, test_data)
confusionMatrix(test_predict, test_data$Top_20)

plot(rf_race)

varImpPlot(rf_race,
           sort = T,
           n.var = 10,
           main = "Top 10 - Variable Importance")


partialPlot(x = rf_race, pred.data = as.data.frame(train_data), x.var = WKG_1m, which.class = "Yes")

