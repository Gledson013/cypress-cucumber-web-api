import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { locators } from '../../support/locators';

Given('I have added products to the cart', () => {
    cy.login(); 
    cy.accessProductsPage(); 
    cy.searchProduct('Frozen'); 
    cy.get(locators.cart.addToCart).first().click(); 
    cy.get(locators.cart.checkMessage) 
        .first()
        .should('be.visible')
        .and('contain.text', locators.cart.messageDisplayed);
});

When('I proceed to the checkout', () => {
    cy.get(locators.cart.cardModal) 
        .should('be.visible')
        .within(() => {
            cy.get(locators.cart.viewCart).click(); 
        });
    cy.get(locators.cart.proceedToCheckout).click();
});

Then('I should see the correct products in the payment screen', () => {
    cy.get(locators.cart.descriptionProduct).scrollIntoView()
        .should('be.visible')
        .and('contain.text', 'Frozen Tops For Kids'); 
    cy.screenshot('PaymentScreen Success', { capture: 'runner' }); // Captura de evidência
    cy.clearCart(); // Reaproveita o comando para limpar o carrinho
});
