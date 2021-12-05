Feature: To test the checkboxes click-ability in "The Internet Herokuapp"

    Background:
        Given the user is on checkboxes page

    Scenario: The one where the user clicks on an unchecked checkbox
        When The user clicks on checkbox 1
        Then The user must see a checkbox 1 is checked


