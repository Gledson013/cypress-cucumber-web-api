Feature: Add Product to Cart

  Scenario: Add a product to the cart
    Given I have searched for a product
    When I add the first product to the cart
    Then I should see the product in the cart summary
