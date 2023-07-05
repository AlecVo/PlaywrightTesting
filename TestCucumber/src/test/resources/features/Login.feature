Feature: Login
  Scenario: I want to be able to login to the homepage.
    Given User launches the chrome browser
    When He opens the login page
    Then He fills in the "<Username>" and "<Password>"
    And He presses login
    And close browser