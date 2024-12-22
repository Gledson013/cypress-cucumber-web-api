// Adicionando um comando personalizado ao Cypress
// Cypress.Commands.add('blockAds', () => {
//     const blockedDomains = [
//         'googleads.g.doubleclick.net',
//         'pagead2.googlesyndication.com',
//         'core.yads.tech',
//         'display.yads.tech',
//     ];

//     cy.intercept({ method: 'GET', url: '**' }, (req) => {
//         if (blockedDomains.some((domain) => req.url.includes(domain))) {
//             req.abort(); // Bloqueia a requisição
//         }
//     });
// });

Cypress.Commands.add('blockAds', () => {
  const blockedDomains = [
    'googleads.g.doubleclick.net',
    'pagead2.googlesyndication.com',
    'core.yads.tech',
    'display.yads.tech',
  ];

  cy.intercept({ method: 'GET', url: '**' }, (req) => {
    if (blockedDomains.some((domain) => req.url.includes(domain))) {
      req.reply({ statusCode: 403, body: '' }); // Bloqueia a requisição
    }
  });
});

Cypress.Commands.add('disableAnimations', () => {
    cy.document().then((doc) => {
        const style = doc.createElement('style');
        style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
        doc.head.appendChild(style);
    });
});




// Declaração global para suportar o comando personalizado
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Bloqueia requisições para domínios de anúncios
             */
            blockAds: () => void;
            disableAnimations(): Chainable<void>;

        }
    }
}

export { };
