import { generateRandomString } from '../../support/common';

describe('Login page test', () => {
  let usedUsername: string;
  let usedPassword: string;

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
      .should(
        'have.text',
        'Need to have 6 or more digit of mixed number and letters.'
      )
      .should('have.class', 'Mui-error');
    cy.contains('button', /SIGN IN/i).should(
      'not.have.attr',
      'disabled',
      'disabled'
    );
  });

  it('should create proper request and response of 201 CREATED and nav to main page', () => {
    cy.visit('/register');
    usedUsername = generateRandomString(5) + '@test.ca';
    usedPassword = 'wasd1wasd';
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(usedUsername);
    cy.get('#password').type(usedPassword);
    cy.get('#passwordConfirmation').type(usedPassword);
    cy.intercept('POST', Cypress.env('backendUrl') + '/user/register').as(
      'register'
    );
    cy.contains('button', /SIGN UP/i).click();
    cy.get('@register', { timeout: 5000 }).should((interception) => {
      expect(interception).to.have.property('response');
    });
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Register succeed. Welcome! :D');
    });

    cy.visit('/login');
    cy.get('#email').clear().type(usedUsername);
    cy.get('#password').type(usedPassword);

    cy.intercept('POST', Cypress.env('backendUrl') + '/user/login').as('login');
    cy.contains('button', /SIGN IN/i).click();

    cy.wait(2000);
    cy.get('h1').invoke('text').should('include', 'Liam');
  });

  it('should create proper request and response of 400 BAD REQUEST', () => {
    cy.get('#email').clear().type(usedUsername);
    cy.get('#password').type('wasdasd');

    cy.intercept('POST', Cypress.env('backendUrl') + '/user/login').as('login');
    cy.contains('button', /SIGN IN/i).click();

    cy.get('@login', { timeout: 5000 }).should((interception) => {
      expect(interception).to.have.property('response');
    });
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('UserExceptions: Username and password combination not found.');
    });

  });
});
