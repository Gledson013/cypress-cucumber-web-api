Feature: API Test

  Scenario: Validate the API response
    When I send a GET request to the Trello API
    Then I should see the field "name" from the "list"
