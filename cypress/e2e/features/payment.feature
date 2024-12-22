Feature: Validate Cart in Payment Screen

  Scenario: Validate products in the cart on the payment screen
    Given I have added products to the cart
    When I proceed to the checkout
    Then I should see the correct products in the payment screen
