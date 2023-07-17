Feature: Login
  Background: User has launched his webbrowser

  Scenario Outline: I want to be able to login to the homepage.
    Given I enter the login page
    When I enter valid "<Username>" and "<Password>"
    Then I am logged in


    Examples:
      | Username            | Password        |
      | Talent2testEmployee | Test1234!       |
      | InvalidUsername     | InvalidPassword |