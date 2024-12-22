Feature: Product Search

  Scenario: Search for a product
    Given I am on the homepage
    When I search for "dress"
    Then I should see results related to "dress"
