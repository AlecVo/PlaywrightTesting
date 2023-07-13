Feature: Navigation
  Background: I am logged in as a user

  Scenario Outline: I want to be able to move around the website
    Given : I am on the homepage
    When : I click on a navigation "<button>"
    Then : I will be navigated to that "<page>"

    Examples:
      | button       | page       |
      | Home         |            |
      | Contracts    | contracts  |
      | Timesheets   | timesheets |
      | Assets       | assets     |
      | Documents    | documents  |
      | Contract     | contracts  |
      | Manage Users | users      |