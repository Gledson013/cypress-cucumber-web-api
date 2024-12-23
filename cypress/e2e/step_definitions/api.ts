import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I send a GET request to the Trello API", () => {
    cy.request({
        method: "GET",
        url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
    }).as("apiResponse");
});
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the field {string} from the {string}", (field: string, parent: string) => {
    cy.get("@apiResponse").then((response: any) => {
        expect(response.status).to.eq(200); // Valida o status da resposta
        const parentData = response.body.data[parent];
        expect(parentData).to.exist; // Valida que o objeto existe
        expect(parentData[field]).to.exist; // Valida que o campo existe
        cy.log(`Valor encontrado: ${parentData[field]}`); // Loga o valor
    });
});
