/// <reference types="cypress" />

Cypress.Commands.add('profileInfo', () => {
  cy.intercept('GET', '/profile_info', { fixture: 'err_profile_info' }).as('getErrProfileInfo');
  cy.visit('/');
});

// tslint:disable-next-line: no-namespace
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    profileInfo(): any;
  }
}
