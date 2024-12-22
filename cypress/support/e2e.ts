import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
    cy.log('Iniciando um novo cenário...');
    cy.screenshot('before-scenario'); // Captura de tela antes de cada cenário (opcional)
});

After(() => {
    cy.log('Cenário concluído!');
    cy.screenshot('after-scenario'); // Captura de tela após cada cenário (opcional)
});


// Import commands.js using ES2015 syntax:
import './commands'