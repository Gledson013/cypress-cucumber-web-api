import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { locators } from '../../support/locators';

Given('I have searched for a product', (product: string) => {
    cy.login(); 
    cy.accessProductsPage(); 
    cy.searchProduct('Frozen');
});

When('I add the first product to the cart', () => {
    cy.get(locators.cart.addToCart).first().click();
    cy.get(locators.cart.checkMessage) // Seleciona os elementos dentro do modal com a classe "text-center"
        .first() // Garante que pega o primeiro elemento
        .should('be.visible')
        .and('contain.text', 'Your product has been added to cart.'); // Valida o texto
});

Then('I should see the product in the cart summary', () => {
    
    cy.get(locators.cart.cardModal).should('be.visible').within(() => {
        cy.get(locators.cart.viewCart).click();
    });

    cy.getSearchedProduct().then((product) => {
        cy.get(locators.cart.descriptionProduct)
            .should('contain.text', product); // Valida que o produto correto está no carrinho
    });

    cy.screenshot('Cart Success', { capture: 'runner' }); // Captura uma evidência do resumo do carrinho
});
