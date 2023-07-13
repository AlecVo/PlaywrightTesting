Feature: Create Timesheet
  Background: I am logged in as a user

    Scenario: I want to be able to create Timesheets
    Given : I am on the Create timesheet page
    When : I fill in the form correctly
    And : I press save
    Then : I made a new timesheet

      Feature: Download a timesheet
        Background: I am logged in as user

          Scenario: I want to be able do download Timesheets
            Given I am on a timesheets detail page
            When I press the download icon
            Then I get a download notification

