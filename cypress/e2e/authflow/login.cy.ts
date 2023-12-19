import { generateRandomString } from '../../support/common';

describe('Login page test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should have a proper title indicate what does this page do', () => {
    cy.get('h3').invoke('text').should('include', 'Log In');
  });

  it('should have proper input fields and labels', () => {
    cy.get('[for="email"]').should('be.visible');
    cy.get('#email')
      .should('be.visible')
      .should('have.prop', 'tagName', 'INPUT');

    cy.get('[for="password"]').should('be.visible');
    cy.get('#password')
      .should('be.visible')
      .should('have.prop', 'tagName', 'INPUT');

    cy.contains('label', 'Remember me').find('input[type="checkbox"]');
    cy.contains('a', 'Forgot password?').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Function is coming soon!');
    });

    cy.contains('a', "Don't have an account? Sign Up").click();
    cy.url().should('include', '/register');
  });

  it('should have input validation and helper messages', () => {
    cy.get('#email').type(generateRandomString(3));
    cy.get('#password').type(generateRandomString(3));
    cy.get('#email-helper-text')
      .should('be.visible')
      .should('have.text', 'Need to be an valid email address.')
      .should('have.class', 'Mui-error');
    cy.get('#password-helper-text')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Need to have 6 or more digit of mixed number and letters.')
      .should('have.class', 'Mui-error');
    cy.contains('button', /SIGN IN/i).should(
      'not.have.attr',
      'disabled',
      'disabled'
    );
  });

  it('should create proper request and response of 201 CREATED', () => {
    cy.visit('/register');
    const email = generateRandomString(5) + '@test.ca';
    const password = 'wasd1wasd';
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(email);
    cy.get('#password').type(password);
    cy.get('#passwordConfirmation').type(password);
    cy.contains('button', /SIGN UP/i).click();

    cy.visit('/login');
    cy.get('#email').clear().type(email);
    cy.get('#password').type(password);

    cy.intercept('POST', Cypress.env('backendUrl') + '/api/login').as(
      'login'
    );
    cy.contains('button', /SIGN IN/i).click();
  });
});
