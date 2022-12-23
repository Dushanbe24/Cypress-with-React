/// <reference types="cypress" />
import JQuery = Cypress.ChainableMethods;

class CreatePage {
  getElementByTag(tag: string) {
    return cy.get(`class="${tag}"`);
  }

  title() {
    return cy.title();
  }
}

export default new CreatePage();
