Feature: A user enter to home page

    Scenario: A welcome message is displayed at home page
      Given A user enter to home page
      Then User see message "Todos los eventos tecnológicos en un mismo lugar."

    Scenario: User see next events at home page
        Given A user enter to home page
        Then User see next events 
    
    Scenario: User see outed events at home
        Given A user enter to home page
        Then User see outdated events

    