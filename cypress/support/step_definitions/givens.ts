import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I navigate to the Home Page$/, function () {
  cy.visit("/", { timeout: 10000 });
});
