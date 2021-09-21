/// <reference types="cypress" />

const apiURL = `${Cypress.env('apiUrl')}`;

describe('Check Page Availability', () => {
  beforeEach('Runs before each it block', () => { });
  it('Visits  application', () => {
    cy.visit('/');
  });
});

describe('Application landing page - Invalid Token', () => {
  let invalidStatusCode = 0;

  beforeEach(() => {
    /*
     Directly connect to server response
    cy.request(apiURL + "/profile_info").should((response) => {
      if (response.body.resp.statusCode === 401)
        invalidStatusCode = response.body.resp.statusCode;
    });*/
  });

  it('Should check for profile info by checking statusCode, data.title, data.detail', () => {
    cy.log(`invalidStatusCode`, invalidStatusCode);
    cy.profileInfo();

    cy.wait('@getErrProfileInfo').then((res) => {
      cy.log(`Inside the getErrProfileInfo `);
      cy.log(`result object `, res);
      const resObj = JSON.parse(JSON.stringify(res));
      cy.log(`final object `, resObj);

      invalidStatusCode = resObj.response.body.resp.statusCode;

      expect(resObj.response.body.resp.statusCode).to.be.eql(401);
      cy.wrap(resObj.response.body.data).should('have.property', 'title') 
      .and('eq', 'Unauthorized');
      cy.wrap(resObj.response.body.data).should('have.property', 'detail') 
      .and('eq', 'Unauthorized');
    });


    /* cy.fixture('err_profile_info').should((res) => {
      if (res.resp.statusCode === 401) { return res.resp.statusCode; }
    });
    cy.fixture('err_profile_info').should((res) => {
        cy.debug();
      const resObj = JSON.parse(JSON.stringify(res));
      cy.log('******* Printing Json ********',resObj)
      cy.log('res body',resObj['resp']['statusCode'])
      cy.debug()
      if (res.resp.statusCode === 401) {
        invalidStatusCode = res.resp.statusCode;
      }
    });*/
  });

  it('Should display the header', () => {
    if (invalidStatusCode === 401) {
      cy.log(`Should display the header `);
      cy.get('[data-cy=app-header]').should(
        'have.text',
        'Twitter Technical Assessment'
      );
    }
  });

  it('Should show error screen and idetity the text, if token is invalid', () => {
    if (invalidStatusCode === 401) {
      cy.get('[data-cy=app-main__empty-container]').should('be.visible');
      cy.get('[data-cy=app-main__empty-container]').contains(
        'Please configure the server settings to access'
      );
    }
  });

  it('Should click the button', () => {
    if (invalidStatusCode === 401) {
      cy.get('[data-cy=app-main-btn]').should('have.text', 'Submit');
      cy.get('[data-cy=app-main-btn]').click();
    }
  });
});
