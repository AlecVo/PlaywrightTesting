Feature: Edit Career tracks
  Background: I am logged in as a user with tenant Team4Talent

  Scenario: I want to be able to edit Career tracks
    Given : I am on the Career track page
    When : I fill in the form correctly
    And : I press save
    Then : I updated my career track