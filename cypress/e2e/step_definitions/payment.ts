import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I have added products to the cart', () => {
    cy.login(); // Reaproveita o comando de login
    cy.accessProductsPage(); // Reaproveita o comando para acessar a página de produtos
    cy.searchProduct('Frozen'); // Reaproveita o comando para pesquisar um produto
    cy.get('[data-product-id="13"]').first().click(); // Adiciona o primeiro produto ao carrinho
    cy.get('[id="cartModal"] [class="text-center"]') // Verifica o modal do carrinho
        .first()
        .should('be.visible')
        .and('contain.text', 'Your product has been added to cart.');
});

When('I proceed to the checkout', () => {
    cy.get('#cartModal') 
        .should('be.visible')
        .within(() => {
            cy.get('a[href="/view_cart"]').click(); 
        });
    cy.get('[class="btn btn-default check_out"]').click();
});

Then('I should see the correct products in the payment screen', () => {
    cy.get('tr[id="product-13"] .cart_description h4 a').scrollIntoView()
        .should('be.visible')
        .and('contain.text', 'Frozen Tops For Kids'); 
    cy.screenshot('PaymentScreen Success', { capture: 'runner' }); // Captura de evidência
    cy.clearCart(); // Reaproveita o comando para limpar o carrinho
});
