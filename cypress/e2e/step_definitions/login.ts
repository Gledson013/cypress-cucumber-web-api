import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login pages', () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.disableAnimations();
});

When('I enter {string} and {string}', (email: string, password: string) => {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
});

When('I click the login button', () => {
    cy.get('[data-qa= "login-button"]').click();
});

Then('I should see {string} on the page', (message: string) => {
    cy.contains(message).should('be.visible');
    cy.screenshot({capture: 'runner'});
});

