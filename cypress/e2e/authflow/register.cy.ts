import { generateRandomString } from '../../support/common';

describe('Register page test', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  // it('should have a proper title indicate what does this page do', () => {
  //   cy.get('h3').invoke('text').should('include', 'Sign Up');
  // });
  //
  // it('should have form with input fields and proper labels', () => {
  //   cy.get('form').should('exist');
  //
  //   cy.get('[for="username"]').should('be.visible');
  //   cy.get('#username')
  //     .should('be.visible')
  //     .should('have.prop', 'tagName', 'INPUT');
  //
  //   cy.get('[for="password"]').should('be.visible');
  //   cy.get('#password')
  //     .should('be.visible')
  //     .should('have.prop', 'tagName', 'INPUT');
  //
  //   cy.get('[for="passwordConfirmation"]').should('be.visible');
  //   cy.get('#passwordConfirmation')
  //     .should('be.visible')
  //     .should('have.prop', 'tagName', 'INPUT');
  // });
  //
  // it('should have input validation and helper messages', () => {
  //   cy.get('#username-helper-text').should('not.exist');
  //   cy.get('#password-helper-text').should('not.exist');
  //   cy.get('#password-confirmation-helper-text').should('not.exist');
  //   cy.get('#username').click();
  //   cy.get('#password').click();
  //   cy.get('#username-helper-text')
  //     .should('be.visible')
  //     .should('have.text', 'Need to be a valid email address.')
  //     .should('have.class', 'Mui-error');
  //   cy.get('#passwordConfirmation').click();
  //   cy.get('#password-helper-text')
  //     .should('exist')
  //     .should('be.visible')
  //     .should('have.text', 'Password needs to have at least 6 digits.')
  //     .should('have.class', 'Mui-error');
  //   cy.get('body').click();
  //   cy.get('#passwordConfirmation-helper-text').should('not.exist');
  //   cy.contains('button', /SIGN UP/i).should(
  //     'have.attr',
  //     'disabled',
  //     'disabled'
  //   );
  // });
  //
  // it('should only be able to sign up only if the form is valid', () => {
  //   const email = generateRandomString(5) + '@test.ca';
  //   const password = 'wasd1wasd';
  //   cy.get('#username').type('rand213@34');
  //   cy.get('body').click();
  //   cy.get('#username-helper-text')
  //     .should('be.visible')
  //     .should('have.text', 'Need to be a valid email address.')
  //     .should('have.class', 'Mui-error');
  //   cy.get('#passwordConfirmation').click();
  //   cy.get('#username').clear().type(email);
  //   cy.get('#password-helper-text')
  //     .should('exist')
  //     .should('be.visible')
  //     .should('have.text', 'Password needs to have at least 6 digits.')
  //     .should('have.class', 'Mui-error');
  //   cy.get('#passwordConfirmation').type(password);
  //   cy.get('#passwordConfirmation-helper-text')
  //     .should('be.visible')
  //     .should('have.text', 'Must match with the password.')
  //     .should('have.class', 'Mui-error');
  //   cy.contains('button', /SIGN UP/i).should(
  //     'have.attr',
  //     'disabled',
  //     'disabled'
  //   );
  //   cy.get('#password').type(password);
  //   cy.contains('button', /SIGN UP/i).should(
  //     'not.have.attr',
  //     'disabled',
  //     'disabled'
  //   );
  // });

  it('should create proper request and response of 201 CREATED', () => {
    const email = generateRandomString(5) + '@test.ca';
    const password = 'wasd1wasd';
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(email);
    cy.get('#password').type(password);
    cy.get('#passwordConfirmation').type(password);

    cy.intercept('POST', Cypress.env('backendUrl') + '/user/register').as(
      'register'
    );
    cy.contains('button', /SIGN UP/i).click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Register succeed. Welcome! :D');
    });
  });

  it('should create proper req/res of 400 BAD REQUEST with proper alert', () => {
    const email = generateRandomString(5) + '@test.ca';
    const password = 'wasd1wasd';
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(email);
    cy.get('#password').type(password);
    cy.get('#passwordConfirmation').type(password);

    cy.intercept('POST', Cypress.env('backendUrl') + '/user/register').as(
      'register1'
    );
    cy.contains('button', /SIGN UP/i).click();
    cy.wait('@register1').on('window:alert', (alertText) => {
      expect(alertText).to.equal('Register succeed. Welcome! :D');
    });

    // register same user again
    cy.intercept('POST', Cypress.env('backendUrl') + '/user/register').as(
      'register2'
    );
    cy.contains('button', /SIGN UP/i).click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('UserExceptions: Username name has already been taken.');
    });
  });
});
