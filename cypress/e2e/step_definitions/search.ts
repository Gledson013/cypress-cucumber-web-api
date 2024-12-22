import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {    
    cy.login(); 
});

When("I access the products screen", () => {
    cy.accessProductsPage();
});

When("I search for {string}", (product: string) => {
    cy.searchProduct(product);
});

Then("I should see results related to {string}", (product: string) => {
    cy.verifySearchResults(product);
});
