/// <reference types="cypress" />

enum ERR_MESSAGE {
  BAD_AUTH = "Bad Authentication data.",
  INVALID_TOKEN = "Invalid or expired token.",
  UNAUTH = "Unauthorized"
};

enum ERR_CODES {
  E_400 = 400,
  E_401 = 401,
};

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
    cy.visit('/');
    /*
     Directly connect to server response
    cy.request(apiURL + "/profile_info").should((response) => {
      if (response.body.resp.statusCode === 401)
        invalidStatusCode = response.body.resp.statusCode;
    });*/


  });

  it('Should check for ProfileInfo info by checking statusCode, data.title, data.detail', () => {
    cy.errProfileInfo();
    cy.log(`invalidStatusCode`, invalidStatusCode);


    cy.wait('@getErrProfileInfo').then((res) => {
      cy.log(`Inside the getErrProfileInfo `);
      cy.log(`result object `, res);
      const resObj = JSON.parse(JSON.stringify(res));
      cy.log(`final object `, resObj);

      invalidStatusCode = resObj.response.body.resp.statusCode;

      expect(resObj.response.body.resp.statusCode).not.to.be.eql(200);

      cy.wrap(resObj.response.body.data).should('have.property', 'title')
        .and('eq', ERR_MESSAGE.UNAUTH);

      cy.wrap(resObj.response.body.data).should('have.property', 'detail')
        .and('eq', ERR_MESSAGE.UNAUTH);
    });

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
     cy.get('[data-cy=app-main__empty-container]').should('be.visible').contains(`Please configure the server settings to access`);

     // Another Way to check condition
      /*cy.get('[data-cy=app-main__empty-container]').then(($el) => {
        expect($el).to.contain(`Please configure the server settings to access`);
      });*/
    }
  });

  it('Should check for UserTimeLine info by checking statusCode & Message', () => {
    cy.errUserTimeLine()
    cy.log('** UserTimeLine **')
    cy.wait('@getErrUserTimeLine')

      //and('eq', ERR_CODES.E_401);
      .its('response.body').should('have.property', 'statusCode').and('eq', ERR_CODES.E_401);

    cy.get('[data-cy=app-main-txt]') // 2.
      .type('Testing the Cypress');

    cy.get('[data-cy=app-main-btn]') // 2.
      .click().then(() => {
        cy.on('window:alert', (str) => {
          expect(str).to.equal(`Hi`)
        });
      });
    // cy.wrap('@getErrUserTimeLine').its('response.body.statusCode').should('have.property', 'message').and('satisfy',message);

    /*cy.wait('@getErrUserTimeLine').then((res) => {
      cy.log(`Inside the getErrProfileInfo `);
      cy.log(`result object `, res);
      const resObj = JSON.parse(JSON.stringify(res));
      cy.log(`final object `, resObj);

      expect(resObj.response.body.statusCode).not.to.be.eql(200);
      const message = ERR_MESSAGE.INVALID_TOKEN ?? ERR_MESSAGE.BAD_AUTH;
      cy.wrap(resObj.response.body).should('have.property', 'message').and('satisfy',message);
    });*/
  });

});


