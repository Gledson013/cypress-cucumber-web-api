import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I have searched for {string}', (searchTerm: string) => {
    cy.login(); // Reaproveita o comando de login
    cy.accessProductsPage(); // Reaproveita o comando para acessar a página de produtos
});

When('I add the first product to the cart', () => {
    cy.searchProduct('Frozen'); // Reaproveita o comando para pesquisar um produto
    cy.get('[data-product-id="13"]').first().click();
    cy.get('[id="cartModal"] [class="text-center"]') // Seleciona os elementos dentro do modal com a classe "text-center"
        .first() // Garante que pega o primeiro elemento
        .should('be.visible') // Verifica que o elemento está visível
        .and('contain.text', 'Your product has been added to cart.'); // Valida o texto
    //cy.screenshot({ capture: 'runner' }); // Captura uma evidência do modal
    cy.screenshot('Screenshot AddProductToCart_ModalVisible', { capture: 'runner' });
});


Then('I should see the product in the cart summary', () => {
    cy.get('#cartModal')
        .should('be.visible') // Verifica se o modal está visível
        .within(() => {
            // Dentro do modal, localiza e clica no link "View Cart"
            cy.get('a[href="/view_cart"]').click();
        });
    //cy.screenshot({ capture: 'runner' }); // Captura uma evidência do resumo do carrinho
    cy.screenshot('Screenshot CartSummary_ViewCartClicked', { capture: 'runner' });
});
