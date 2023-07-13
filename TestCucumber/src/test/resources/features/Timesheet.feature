Feature: Create Timesheet
  Background: I am logged in as a user

    Scenario: I want to be able to create Timesheets
    Given : I am on the Create timesheet page
    When : I fill in the form correctly
    And : I press save
    Then : I made a new timesheet