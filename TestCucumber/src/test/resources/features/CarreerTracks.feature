Feature: Edit Carreer tracks
  Background: I am logged in as a user with tenant Team4Talent

  Scenario: I want to be able to edit Carreer tracks
    Given : I am on the Carreer track page
    When : I fill in the form correctly
    And : I press save
    Then : I updated my carreer track