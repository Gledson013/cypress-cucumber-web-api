const email = Cypress.env('email');
const password = Cypress.env('password');
import { locators } from "./locators";

Cypress.Commands.add("login", () => {
    cy.visit("https://www.automationexercise.com/login");
    cy.get(locators.login.email).type(email);
    cy.get(locators.login.password).type(password);
    cy.get(locators.login.submit).click();
    cy.contains('Logged in as teste plard').should('be.visible');
});

Cypress.Commands.add("searchProduct", (product: string) => {
    cy.get(locators.products.searchProduct).type(product); 
    cy.get(locators.products.submitSearc).click();
    cy.wrap(product).as('searchedProduct'); 
});

Cypress.Commands.add("getSearchedProduct", (): Cypress.Chainable<string> => {
    return cy.get<string>('@searchedProduct'); // Recupera o nome do produto do alias
});

Cypress.Commands.add('accessProductsPage', () => {
    cy.get(locators.products.goProduts).click();
    cy.url().should('include', '/products');
    
});


Cypress.Commands.add("clearCart", () => {
    // Acessa o carrinho
    cy.get(locators.cart.viewCart).click();

    // Verifica se está na página do carrinho
    cy.url().should('include', '/view_cart');

    // Remove os produtos do carrinho se existirem
    cy.get('tbody tr').then((rows) => {
        if (rows.length > 0) {
            // Percorre as linhas da tabela e remove cada produto
            cy.get(locators.cart.deleteProductsCart).each(($el) => {
                cy.wrap($el).click();
            });
        }
    });

    // Valida que o carrinho está vazio
    cy.contains('Cart is empty!').should('be.visible');
    cy.screenshot('CartCleared', { capture: 'runner' }); // Captura evidência
});

Cypress.Commands.add('verifySearchResults', (product: string) => {
    cy.get('.productinfo > p').scrollIntoView() // Ajuste o seletor para os nomes dos produtos exibidos
        .should('contain.text', product);
});

// Declaração global para suportar os comandos personalizados
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Realiza login no sistema
             */
            login(): Chainable<void>;

            /**
             * Realiza a busca por um produto
             * @param product Nome do produto para buscar
             */
            searchProduct(product: string): Chainable<void>;

            getSearchedProduct(): Chainable<string>;


            clearCart(): Chainable<void>;


            /**
             * Acessa a página de produtos
             */
            accessProductsPage(): Chainable<void>;

            /**
             * Verifica os resultados da busca
             * @param product Nome do produto esperado nos resultados
             */
            verifySearchResults(product: string): Chainable<void>;

            /**
             * Bloqueia requisições para domínios de anúncios
             */
            blockAds: () => void;

            /**
             * Desabilita animações da página
             */
            disableAnimations(): Chainable<void>;
        }
    }
}

export { };
