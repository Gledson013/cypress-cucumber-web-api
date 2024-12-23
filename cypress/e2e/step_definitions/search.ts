import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {    
    cy.login(); 
});

When("I access the products screen", () => {
    cy.accessProductsPage();
});

When("I search for {string}", (product: string) => {
    cy.searchProduct(product);
    cy.wrap(product).as('searchedProduct'); // Armazena o nome do produto no alias

});

Then("I should see results related to {string}", (product: string) => {
    cy.verifySearchResults(product);
    cy.screenshot('Search Sucess', { capture: 'runner' });

});
