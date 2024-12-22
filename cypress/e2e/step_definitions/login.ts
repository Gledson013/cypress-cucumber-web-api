import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login pages', () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.screenshot('step-login-page');
});

When('I enter {string} and {string}', (email: string, password: string) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.screenshot('step-enter-credentials');
});

When('I click the login button', () => {
    cy.get('button[type="submit"]').click();
    cy.screenshot('step-click-login');
});

Then('I should see {string} on the page', (message: string) => {
    cy.contains(message).should('be.visible');
    cy.screenshot('step-login-success');
});
