import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the homepage', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.screenshot('step-homepage');
});

When('I search for {string}', (searchTerm: string) => {
    cy.get('#search_query_top').type(searchTerm);
    cy.get('button[name="submit_search"]').click();
    cy.screenshot('step-search-results');
});

Then('I should see results related to {string}', (searchTerm: string) => {
    cy.contains(searchTerm).should('be.visible');
    cy.screenshot('step-search-validated');
});
