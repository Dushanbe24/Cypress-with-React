import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see {string} container header", (product) => {
  const header = cy.get(".products-found");
  expect(header.should("be.visible", product));
});

Then(/^I should see the inscription "(.*)"$/, function (container: string) {
  expect(
    cy
      .get(".shelf-container-header")
      .contains(container)
      .should("be.visible", container)
  );
});

Then("user can see cart on right side", () => {
  expect(cy.get(".bag--float-cart-closed").should("be.visible"));
});

Then("I can see small text {string}", (text: string) => {
  expect(cy.contains(text).should("be.visible", text));
});

Then("I should see my chosen sizes", () => {
  cy.get(".filters").should("be.visible");
});

Then("I select on the {string}", (sorter: string) => {
  cy.wait(1000);
  cy.get("select").select(sorter, { force: true });
});

Then("I should see in sorter {string}", (value: string) => {
  cy.wait(1000);
  expect(cy.contains(value).should("be.visible", value));
});

Then("I should see my Cart container open", () => {
  cy.get(".float-cart__shelf-container > .shelf-item").should("be.visible");
});

Then("I should see {string}", (total: string) => {
  cy.wait(1000);
  cy.get(".float-cart__shelf-container > .shelf-item").should("be.visible");
});

Then("I click {string}", (check: string) => {
  cy.wait(1000);
  cy.contains(check).click();
});

Then("I should see the message {string}", (message: string) => {
  cy.contains(message).should("be.visible", message);
});

Then("I should close Cart", () => {
  cy.get(".float-cart__close-btn").click();
});
