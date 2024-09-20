# server function
server <- function(input, output, session) {
  
  # Activate thematic for automatic plot theming
  thematic::thematic_shiny()
  
  # Reactive theme based on input$theme_toggle
  observe({
    session$setCurrentTheme(
      bs_theme(
        version = 5,
        bootswatch = if (input$theme_toggle) "darkly" else "flatly"
      )
    )
  })
  
  
  IS_PROD <- Sys.getenv("IS_PROD") == "TRUE"
  
  if(IS_PROD){
    HOST <- Sys.getenv("FIASCO_RACES_DATABASE_HOST")
    PORT <- Sys.getenv("FIASCO_RACES_DATABASE_PORT")
    DATABASE <- Sys.getenv("FIASCO_RACES_DATABASE_NAME")
    USERNAME <- Sys.getenv("FIASCO_RACES_DATABASE_USERNAME")
    PASSWORD <- Sys.getenv("FIASCO_RACES_DATABASE_PASSWORD")
  }else{
    HOST <- "dbp.qa.scalyapps.io"
    PORT <- 5432
    DATABASE <- "x66269148715a566f853da7e7550b8e99"
    USERNAME <- "66269148715a566f"
    PASSWORD <- "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.QWvg2STQ9Fp0X6M0HogrPzE0YO-9qK5-FpExgpj0Zm8QYcTCPUuEPBrGcOCaspXiK1yK0y0iNInIovzGwtXBChOOY8vPNH4sCP2P33ix60ujxPMa2dlRovMWim9-YaJuKkbm-4YyiC9OTQKk52ZpQdyX4UesBRAnWaaalBSPy83mdmCHLSNSHOygy9p5OLg_F1WIfIzgeGPPpTwcY9pYlvRmCkcocjRc5yna-LB2zbWrBGPZVfMUr-DaGoiMta_z8eQtKkXQxEmDkDG3M1N6U_LEHF3lrlM1H2uKsRS9Bu2GMcIUiTnr29zb_5rSxD3qOu2jiZuQ8uDgBxo6jmHOCg.NwDhNW2D3Gx5u25o.mhZa0uoYWiAbB8eGIzm1aTcpiG86JzSEORiMh_KoELE7pZRhMCtM7B96jsUs7F1oZ3lg2l474J9qPqtgv4zbaomfWQt30ydALJA5UwZd0RF65V0IaLqrt0D08XT-ztWoiU__TUCLBbvfNFZn23P3qE7-ZD87jeOgGmGQomnkIyKQak1gE7_ocHdnX7bZU1iNPqw2d6TD7_yicbsj904j_jWuUxRuPL8zTBYC3JJol8NRV8HVMOX3lkNx90QVt7COq6C8MIeljEof10sXG8WxME3lFlmA_KQlqgK1hXDllBpMb6OHSe7dvMl3iPWsXWfzfNVvyrxoLFEXD1M_OjT9q0hofND8FfWdTuBtqIJTE-SPPfJiLYEK37_fOomMY2lyvEbbvKOelmklQDkag9i0ybKZIxD6L_Nio_3O8eKyagdYHNc-s8BXSeT_RQip7zY6AxPCSdbs9WNK1qfVqU0UQ4n6Z041pH6yv74Hw_jIZu6fbYTGuWc1Dri9jrKlRlyMLaqOn7jcDVWIhmO5Lbijd-MRwIBBCU7t5vblKSR3L76UMGUdHsgRdgDRCh40qeE-JvxQci5CZ4rTzwrVh85sZ7uGjG5ZNoxlN9uLrSNdgO99SeesnumQsjHI6j1dJNINurYDp0WjWheoODE-zS_EWU0RQ_Yk_LsJvjR_FwFA2PY_NKYFPNIuGsopwa8GyWjukQcI5aNXrGKvXzpYO2IaWAPe0k8eiMXCDB0RB1snEmgU2lPH4Kv-uh03umuQVKmoJCUhUSwLtjO8WDtpk2ivs69jjkKRaOCZGa5PANz1-uglFJ5pLmoND9C3fS_rAziV5S09Q6OfqGdlvERKa8NLGwRwdbzPuD2_CH7Qg7E_GxZwIgabc2LeOc2_39VIM41RcsGvtoFuwqD9DCKFLGy5Az7RYqzEviEBv8kIgTuQRMmI1DeCHkTwB71hr657v5KPjPXLw58IrKPNkQEwyJx2X50pDjpOUxyBs5_hbR9eBNLCOtXQSoIL5dgUT1P4sYVprXmeJ53zN6_FXPDujlJ5e8uW6g7bsouFhJzvGr3K8S3vEYTNu_UbRu4OXCMwWtW6ph4KWSEdUIiM4PC5RlDw8PFTsKaLtmNihsZ1IVHjy1NoRuVdbUuEzSZM1Co1USrWgVKLhZqkGjP0MTlEgTC9IXmg5b9nNEmZTCi15O1icMXDpWw-9d0CRjeuQ705SqznV_arG5rA4a_PrhMBFCtANSgwoBVWFuq3dj3I6-6V0qEDNgasw52c4DAuUDBl_J9g6ENGckHDSd-5HTS4GXCui-HddYS_EOXMkCLP0n_H2yehN-O9f1yvLcJ5bXwh4KP5BiNjpbhW.ZwYGGHgaNIv-hQwc0cX9lg"
  }
  
  
  #Generate temp creds from Scaly
  HOST <- "dbp.qa.scalyapps.io"
  PORT <- 5432
  DATABASE <- "x66269148715a566f853da7e7550b8e99"
  USERNAME <- "66269148715a566f"
  PASSWORD <- "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.QWvg2STQ9Fp0X6M0HogrPzE0YO-9qK5-FpExgpj0Zm8QYcTCPUuEPBrGcOCaspXiK1yK0y0iNInIovzGwtXBChOOY8vPNH4sCP2P33ix60ujxPMa2dlRovMWim9-YaJuKkbm-4YyiC9OTQKk52ZpQdyX4UesBRAnWaaalBSPy83mdmCHLSNSHOygy9p5OLg_F1WIfIzgeGPPpTwcY9pYlvRmCkcocjRc5yna-LB2zbWrBGPZVfMUr-DaGoiMta_z8eQtKkXQxEmDkDG3M1N6U_LEHF3lrlM1H2uKsRS9Bu2GMcIUiTnr29zb_5rSxD3qOu2jiZuQ8uDgBxo6jmHOCg.NwDhNW2D3Gx5u25o.mhZa0uoYWiAbB8eGIzm1aTcpiG86JzSEORiMh_KoELE7pZRhMCtM7B96jsUs7F1oZ3lg2l474J9qPqtgv4zbaomfWQt30ydALJA5UwZd0RF65V0IaLqrt0D08XT-ztWoiU__TUCLBbvfNFZn23P3qE7-ZD87jeOgGmGQomnkIyKQak1gE7_ocHdnX7bZU1iNPqw2d6TD7_yicbsj904j_jWuUxRuPL8zTBYC3JJol8NRV8HVMOX3lkNx90QVt7COq6C8MIeljEof10sXG8WxME3lFlmA_KQlqgK1hXDllBpMb6OHSe7dvMl3iPWsXWfzfNVvyrxoLFEXD1M_OjT9q0hofND8FfWdTuBtqIJTE-SPPfJiLYEK37_fOomMY2lyvEbbvKOelmklQDkag9i0ybKZIxD6L_Nio_3O8eKyagdYHNc-s8BXSeT_RQip7zY6AxPCSdbs9WNK1qfVqU0UQ4n6Z041pH6yv74Hw_jIZu6fbYTGuWc1Dri9jrKlRlyMLaqOn7jcDVWIhmO5Lbijd-MRwIBBCU7t5vblKSR3L76UMGUdHsgRdgDRCh40qeE-JvxQci5CZ4rTzwrVh85sZ7uGjG5ZNoxlN9uLrSNdgO99SeesnumQsjHI6j1dJNINurYDp0WjWheoODE-zS_EWU0RQ_Yk_LsJvjR_FwFA2PY_NKYFPNIuGsopwa8GyWjukQcI5aNXrGKvXzpYO2IaWAPe0k8eiMXCDB0RB1snEmgU2lPH4Kv-uh03umuQVKmoJCUhUSwLtjO8WDtpk2ivs69jjkKRaOCZGa5PANz1-uglFJ5pLmoND9C3fS_rAziV5S09Q6OfqGdlvERKa8NLGwRwdbzPuD2_CH7Qg7E_GxZwIgabc2LeOc2_39VIM41RcsGvtoFuwqD9DCKFLGy5Az7RYqzEviEBv8kIgTuQRMmI1DeCHkTwB71hr657v5KPjPXLw58IrKPNkQEwyJx2X50pDjpOUxyBs5_hbR9eBNLCOtXQSoIL5dgUT1P4sYVprXmeJ53zN6_FXPDujlJ5e8uW6g7bsouFhJzvGr3K8S3vEYTNu_UbRu4OXCMwWtW6ph4KWSEdUIiM4PC5RlDw8PFTsKaLtmNihsZ1IVHjy1NoRuVdbUuEzSZM1Co1USrWgVKLhZqkGjP0MTlEgTC9IXmg5b9nNEmZTCi15O1icMXDpWw-9d0CRjeuQ705SqznV_arG5rA4a_PrhMBFCtANSgwoBVWFuq3dj3I6-6V0qEDNgasw52c4DAuUDBl_J9g6ENGckHDSd-5HTS4GXCui-HddYS_EOXMkCLP0n_H2yehN-O9f1yvLcJ5bXwh4KP5BiNjpbhW.ZwYGGHgaNIv-hQwc0cX9lg"
  
  #connect to db
  pool <- pool::dbPool(
    drv = RPostgres::Postgres(),
    dbname = DATABASE,
    host = HOST,
    port = PORT,
    user = USERNAME,
    password = PASSWORD
  )
  
  # Load the data
  data <- dbReadTable(pool, "race_data")
  
  # Close the connection when the session ends
  # session$onSessionEnded(function() {
  #   pool::dbDisconnect(pool)
  # })
  
  # Reactive expression to compute adjusted WKG values
  adjusted_data <- reactive({
    beta <- input$weight_factor  # Weight factor from slider input
    mean_weight <- mean(data$Weight)
    
    data %>%
      mutate(
        Adjusted_WKG = Avg_WKG * (Weight / mean_weight) ^ beta,
        Adjusted_WKG_20m = WKG_20m * (Weight / mean_weight) ^ beta,
        Adjusted_WKG_5m = WKG_5m * (Weight / mean_weight) ^ beta,
        Adjusted_WKG_1m = WKG_1m * (Weight / mean_weight) ^ beta,
        Adjusted_WKG_30s = WKG_30s * (Weight / mean_weight) ^ beta,
        Adjusted_WKG_15s = WKG_15s * (Weight / mean_weight) ^ beta
      )
  })
  
  
  # Reactive expression to get selected metrics
  selected_metrics <- reactive({
    input$metrics
  })
  
  # Compute correlations
  correlations <- reactive({
    df <- adjusted_data()
    
    # Convert Top_20 to numeric (Yes = 1, No = 0)
    #df$Top_20_numeric <- ifelse(df$Top_20 == "Yes", 1, 0)
    
    # Select relevant columns
    corr_data <- df %>%
      select(Position, all_of(paste0("Adjusted_", selected_metrics())))
    
    # Compute correlations
    corr_values <- sapply(corr_data[-1], function(x) cor(x, corr_data$Position))
    
    # Create a data frame
    data.frame(
      Metric = names(corr_values),
      Correlation = corr_values
    )
  })
  
  # Output the correlation table
  output$correlation_table <- renderDT({
    datatable(correlations(), options = list(pageLength = 5))
  })
  
  # Output the correlation plot
  # Output the correlation plot
  output$correlation_plot <- renderPlotly({
    df <- adjusted_data()
    
    adjusted_metrics <- paste0("Adjusted_", selected_metrics())
    existing_metrics <- adjusted_metrics[adjusted_metrics %in% names(df)]
    
    if (length(existing_metrics) == 0) {
      return(NULL)
    }
    
    # Gather data for plotting
    plot_data <- df %>%
      select(Position, all_of(existing_metrics)) %>%
      pivot_longer(
        cols = all_of(existing_metrics),
        names_to = "Metric",
        values_to = "Adjusted_Value"
      )
    
    # Clean up Metric names for display
    plot_data$Metric <- gsub("Adjusted_", "", plot_data$Metric)
    
    # Create the ggplot
    p <- ggplot(plot_data, aes(x = Position, y = Adjusted_Value)) +
      geom_jitter(height = 0.05, width = 0, alpha = 0.6) +
      geom_smooth(method = "lm", se = FALSE, color = "steelblue") +
      facet_wrap(~ Metric, scales = "free_y", ncol = 2) +
      scale_x_reverse() +
      labs(
        title = "Adjusted Metrics vs Position",
        x = "Position (Descending Order)",
        y = "Adjusted Power Metric"
      )
    
    # Adjust plot height based on the number of selected metrics
    plot_height <- 300 * length(unique(plot_data$Metric))
    
    # Convert ggplot to plotly for interactivity
    ggplotly(p, height = plot_height)
  })
  
  # Output the data table
  output$data_table <- renderDT({
    datatable(
      adjusted_data(), 
      options = list(scrollX = TRUE),
      class = if (input$theme_toggle) "display dark-mode" else "display"
    )
  })
  
  
  # Define a sequence of beta values
  beta_values <- seq(0, 2, by = 0.1)
  
  compute_correlations <- function(beta, data, metrics) {
    # Adjust the metrics
    adjusted_data <- data %>%
      mutate(across(all_of(metrics), ~ .x * (Weight / mean(data$Weight)) ^ beta, .names = "Adjusted_{.col}"))
    
    # Compute correlations with Position
    corr_values <- adjusted_data %>%
      summarise(across(starts_with("Adjusted_"), ~ cor(.x, Position, method = "pearson"))) %>%
      pivot_longer(everything(), names_to = "Metric", values_to = "Correlation")
    
    # Add beta value
    corr_values$Beta <- beta
    
    return(corr_values)
  }
  
  goodness_of_fit_data <- reactive({
    # Use selected metrics from input
    selected_metrics <- input$metrics
    
    # Initialize an empty data frame to store results
    correlation_results <- data.frame()
    
    # Loop over beta values and compute correlations
    for (beta in beta_values) {
      corr_values <- compute_correlations(beta, data, selected_metrics)
      correlation_results <- bind_rows(correlation_results, corr_values)
    }
    
    # Clean up Metric names
    correlation_results$Metric <- gsub("Adjusted_", "", correlation_results$Metric)
    
    return(correlation_results)
  })
  
  # Render the plot
  output$goodness_of_fit_plot <- renderPlot({
    # Get the data
    correlation_results <- goodness_of_fit_data()
    
    # Create the ggplot
    ggplot(correlation_results, aes(x = Beta, y = Correlation)) +
      geom_line(color = "steelblue") +
      facet_wrap(~ Metric, scales = "free_y") +
      labs(
        title = "Goodness-of-Fit vs Beta",
        x = "Beta (Weight Factor)",
        y = "Correlation with Position"
      )
  })
  
  
}
