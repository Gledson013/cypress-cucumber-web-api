// cypress/support/e2e.ts

// Importa comandos personalizados
import './commands';

// Você pode incluir capturas de tela globais aqui, mas evite steps ou hooks
Cypress.on('uncaught:exception', (err) => {
    console.error('Erro não tratado:', err);
    return false;
});

beforeEach(() => {
    // Intercepta e bloqueia requisições que contenham palavras-chave relacionadas a anúncios
    cy.intercept('GET', '*googleads*', { statusCode: 204 }); // Bloqueia anúncios do Google
    cy.intercept('GET', '*ads*', { statusCode: 204 }); // Bloqueia URLs com 'ads'
    cy.intercept('GET', '*doubleclick.net*', { statusCode: 204 }); // Bloqueia DoubleClick
});

