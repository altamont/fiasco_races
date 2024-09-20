library(shiny)
library(DBI)
library(RSQLite)
library(dplyr)
library(ggplot2)
library(bslib)
library(DT)
library(shinyWidgets)
library(shinydashboard)
library(plotly)
library(pool)
library(tidyr)
library(shinyWidgets)


ui <- fluidPage(
  theme = bs_theme(version = 5, bootswatch = "flatly"),
  
  # Include custom CSS
  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "styles.css")
  ),
  
  div(class = "container-fluid",
      div(class = "row",
          div(class = "col-md-3 sidebar",
              sidebarPanel(
                materialSwitch(
                  inputId = "theme_toggle",
                  label = "Dark Mode",
                  value = TRUE
                ),
                sliderInput(
                  inputId = "weight_factor",
                  label = "Weight Factor (β)",
                  min = 0,
                  max = 2,
                  value = 0.5,
                  step = 0.1
                ),
                checkboxGroupInput(
                  inputId = "metrics",
                  label = "Select Power Metrics:",
                  choices = c("Avg_WKG", "WKG_20m", "WKG_5m", "WKG_1m", "WKG_30s", "WKG_15s"),
                  selected = c("WKG", "WKG_20m", "WKG_5m")
                ),
                width = 12  # Adjust to fit the custom layout
              )
          ),
          div(class = "col-md-9 main-panel",
              mainPanel(
                tabsetPanel(
                  tabPanel("Correlation Plot", plotly::plotlyOutput("correlation_plot")),
                  tabPanel("Goodness-of-Fit Plot", plotOutput("goodness_of_fit_plot")),
                  tabPanel("Correlation Table", DTOutput("correlation_table")),
                  tabPanel("Data Table", DT::DTOutput("data_table"))
                ),
                width = 12  # Adjust to fit the custom layout
              )
          )
      )
  )
)
