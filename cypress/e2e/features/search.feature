Feature: Product Search

  Scenario: Search for a product
    Given I am on the homepage
    When I access the products screen 
    When I search for "Frozen"
    Then I should see results related to "Frozen"
