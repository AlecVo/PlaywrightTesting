Feature: Login
  Scenario Outline: I want to be able to login to the homepage.
    Given User launches the chrome browser
    When He opens the login page
    Then I enter valid "<Username>" and "<Password>"
    And He presses login
    And close browser

    Examples:
      | Username            | Password        |
      | Talent2testEmployee | Test1234!       |
      | InvalidUsername     | InvalidPassword |