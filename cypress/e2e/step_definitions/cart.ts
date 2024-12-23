import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I have searched for a product', (product: string) => {
    cy.login(); 
    cy.accessProductsPage(); 
    cy.searchProduct('Frozen');
});

When('I add the first product to the cart', () => {
    cy.get('[data-product-id="13"]').first().click();
    cy.get('[id="cartModal"] [class="text-center"]') // Seleciona os elementos dentro do modal com a classe "text-center"
        .first() // Garante que pega o primeiro elemento
        .should('be.visible')
        .and('contain.text', 'Your product has been added to cart.'); // Valida o texto
});

Then('I should see the product in the cart summary', () => {
    
    cy.get('#cartModal').should('be.visible').within(() => {
        cy.get('a[href="/view_cart"]').click();
    });

    cy.getSearchedProduct().then((product) => {
        cy.get('tr#product-13 .cart_description h4 a')
            .should('contain.text', product); // Valida que o produto correto está no carrinho
    });

    cy.screenshot('Cart Success', { capture: 'runner' }); // Captura uma evidência do resumo do carrinho
});
