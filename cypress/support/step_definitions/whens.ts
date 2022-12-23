import { When } from "@badeball/cypress-cucumber-preprocessor";
import CreatePage from "../../e2e/pages/create.page";

When(/^I see unchecked available sizes:$/, function (table: any) {
  cy.wait(1000);
  const fields = table.raw().flat();
  for (let i = 0; i < fields.length; i++) {
    const fieldsForm = cy.get(".checkmark");
    fieldsForm.contains(fields[i]).should("be.visible");
  }
});

When(/^I have selected all item sizes$/, function () {
  const fields = cy.get(".checkmark");
  cy.waitUntil(() => fields, {
    timeout: 3000,
    interval: 500,
    errorMsg: `Error >> Could not find locale field ${fields}`,
  });
  fields.click({ multiple: true });
});

When("I should see the {string} title", (title) => {
  const sizes = cy.get(".title");
  sizes.should("be.visible", title);
});

When("I see {string}", (cart: string) => {
  cy.get(".shelf-container").should("be.visible");
  cy.contains(cart).should("be.visible", cart);
});

When("I select {string} products item", (cart: string) => {
  cy.wait(2000);
  cy.contains(cart).click();
});

When("I see in baq quantti", () => {
  cy.wait(2000);
  cy.get(".bag__quantity").should("be.visible");
});

When("inside on my Cart I see my items", () => {
  cy.get(".float-cart__shelf-container > .shelf-item").should("be.ok");
});

When("I remove items from Cart", () => {
  cy.get(".shelf-item__del").click();
});
