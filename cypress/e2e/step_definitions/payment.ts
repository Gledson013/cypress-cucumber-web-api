import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I have added products to the cart', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('#search_query_top').type('dress');
    cy.get('button[name="submit_search"]').click();
    cy.get('.ajax_add_to_cart_button').first().click();
    cy.screenshot('step-add-to-cart');
});

When('I proceed to the checkout', () => {
    cy.get('.button-container a[title="Proceed to checkout"]').click();
    cy.screenshot('step-checkout');
});

Then('I should see the correct products in the payment screen', () => {
    cy.get('#cart_summary').should('be.visible');
    cy.screenshot('step-payment-screen');
});
