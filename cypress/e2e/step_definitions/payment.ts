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
    cy.screenshot('AddProductToCart_ModalVisible', { capture: 'runner' }); // Captura de evidência
});

When('I proceed to the checkout', () => {
    cy.get('#cartModal') // Garante que o modal do carrinho está visível
        .should('be.visible')
        .within(() => {
            cy.get('a[href="/view_cart"]').click(); // Acessa o carrinho
        });
    cy.get('[class="btn btn-default check_out"]').click(); // Clica no botão de checkout
    cy.screenshot('ProceedToCheckout', { capture: 'runner' }); // Captura de evidência
});

Then('I should see the correct products in the payment screen', () => {
    cy.get('tr[id="product-13"] .cart_description h4 a').scrollIntoView() // Seletor do nome do produto
        .should('be.visible') // Garante que o elemento está visível
        .and('contain.text', 'Frozen Tops For Kids'); 
    cy.screenshot('PaymentScreen_Validation', { capture: 'runner' }); // Captura de evidência
    cy.clearCart(); // Reaproveita o comando para limpar o carrinho
});
