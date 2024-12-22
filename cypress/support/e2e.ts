// cypress/support/e2e.ts

// Importa comandos personalizados
import './commands';

// Você pode incluir capturas de tela globais aqui, mas evite steps ou hooks
Cypress.on('uncaught:exception', (err) => {
    console.error('Erro não tratado:', err);
    return false;
});
