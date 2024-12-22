import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I have searched for {string}', (searchTerm: string) => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('#search_query_top').type(searchTerm);
    cy.get('button[name="submit_search"]').click();
    cy.screenshot('step-search-results');
});

When('I add the first product to the cart', () => {
    cy.get('.ajax_add_to_cart_button').first().click();
    cy.screenshot('step-add-to-cart');
});

Then('I should see the product in the cart summary', () => {
    cy.get('.layer_cart_product').should('be.visible');
    cy.screenshot('step-cart-summary');
});
