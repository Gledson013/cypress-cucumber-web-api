import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I send a GET request to the Trello API', () => {
    cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
        .as('apiResponse');
});

Then('I should see the field {string} from the {string}', (field: string, parent: string) => {
    cy.get('@apiResponse').then((response: any) => {
        // Log para entender a estrutura
        cy.log(JSON.stringify(response.body));

        // Acesse o campo corretamente
        const parentObject = response.body[parent];
        expect(parentObject).to.exist;

        const value = parentObject[field];
        cy.log(`Field value: ${value}`);
        expect(value).to.exist;
    });
});

Then('I should see the field {string} from the {string}', (field: string, parent: string) => {
    cy.get('@apiResponse').then((response: any) => {
        cy.log('API Response Body:');
        cy.log(JSON.stringify(response.body)); // Verifica a estrutura completa
    });
});

Then('the status code should be {int}', (statusCode: number) => {
    cy.get('@apiResponse').its('status').should('eq', statusCode);
    cy.screenshot('API_Response_Validation', { capture: 'runner' });

});
