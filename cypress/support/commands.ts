/// <reference types="cypress" />

Cypress.Commands.add('errProfileInfo', () => {
  cy.intercept('GET', '/profile_info', { fixture: 'err_profile_info' }).as('getErrProfileInfo');
  cy.visit('/');
});

Cypress.Commands.add('errUserTimeLine', () => {
  cy.intercept('GET', '/user_timeline', { fixture: 'err_user_timeline' }).as('getErrUserTimeLine');
  cy.visit('/');
});


Cypress.Commands.add('errHomeTimeLine', () => {
  cy.intercept('GET', '/home_timeline', { fixture: 'err_home_timeline' }).as('getErrHomeTimeLine');
  cy.visit('/');
});


Cypress.Commands.add('errMentionTimeLine', () => {
  cy.intercept('GET', '/mentions_timeline', { fixture: 'err_mention_timeline' }).as('getErrMentionTimeLine');
  cy.visit('/');
});


// tslint:disable-next-line: no-namespace
declare namespace Cypress {
  interface Chainable {
    errProfileInfo(): any;
    errUserTimeLine(): any;
    errHomeTimeLine(): any;
    errMentionTimeLine(): any;
  }
}
