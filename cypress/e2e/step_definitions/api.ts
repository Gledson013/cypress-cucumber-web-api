import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Interface que representa a resposta da API do Trello
interface TrelloApiResponse {
    data: {
        list: {
            name: string;
            id: string;
        };
        [key: string]: any;
    };
    [key: string]: any;
}

// Step que realiza a chamada GET para a API do Trello
When("I send a GET request to the Trello API", () => {
    cy.request({
        method: "GET",
        url: Cypress.env("trelloApiUrl"), 
    }).as("apiResponse");
});


Then("I should see the field {string} from the {string}", (field: string, parent: string) => {
    cy.get<TrelloApiResponse>("@apiResponse").then((response) => {
        // Verifica se a resposta da API foi 200
        expect(response.status).to.eq(200);     

        // Verifica que a propriedade 'list' dentro de 'data' existe e contém os campos esperados
        const parentData = response.body.data[parent];
        expect(parentData).to.exist; 
        expect(parentData[field]).to.exist;
        cy.log(`Valor encontrado: ${parentData[field]}`);
    });
});
