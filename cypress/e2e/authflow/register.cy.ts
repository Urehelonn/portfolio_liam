import { generateRandomString } from '../../support/common';

describe('Register page test', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should have a proper title indicate what does this page do', () => {
    cy.get('h3').invoke('text').should('include', 'Sign Up');
  });

  it('should have form with input fields and proper labels', () => {
    cy.get('form').should('exist');

    cy.get('[for="username"]').should('be.visible');
    cy.get('#username')
      .should('be.visible')
      .should('have.prop', 'tagName', 'INPUT');

    cy.get('[for="password"]').should('be.visible');
    cy.get('#password')
      .should('be.visible')
      .should('have.prop', 'tagName', 'INPUT');

    cy.get('[for="passwordConfirmation"]').should('be.visible');
    cy.get('#passwordConfirmation')
      .should('be.visible')
      .should('have.prop', 'tagName', 'INPUT');
  });

  it('should have input validation and helper messages', () => {
    cy.get('#username-helper-text').should('not.exist');
    cy.get('#password-helper-text').should('not.exist');
    cy.get('#password-confirmation-helper-text').should('not.exist');
    cy.get('#username').click();
    cy.get('#password').click();
    cy.get('#username-helper-text')
      .should('be.visible')
      .should('have.text', 'Need to be a valid email address.')
      .should('have.class', 'Mui-error');
    cy.get('#passwordConfirmation').click();
    cy.get('#password-helper-text')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Password needs to have at least 6 digits.')
      .should('have.class', 'Mui-error');
    cy.get('body').click();
    cy.get('#passwordConfirmation-helper-text').should('not.exist');
    cy.contains('button', /SIGN UP/i).should(
      'have.attr',
      'disabled',
      'disabled'
    );
  });

  it('should only be able to sign up only if the form is valid', () => {
    const email = generateRandomString(5) + '@test.ca';
    const password = 'wasd1wasd';
    cy.get('#username').type('rand213@34');
    cy.get('body').click();
    cy.get('#username-helper-text')
      .should('be.visible')
      .should('have.text', 'Need to be a valid email address.')
      .should('have.class', 'Mui-error');
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(email);
    cy.get('#password-helper-text')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Password needs to have at least 6 digits.')
      .should('have.class', 'Mui-error');
    cy.get('#passwordConfirmation').type(password);
    cy.get('#passwordConfirmation-helper-text')
      .should('be.visible')
      .should('have.text', 'Must match with the password.')
      .should('have.class', 'Mui-error');
    cy.contains('button', /SIGN UP/i).should(
      'have.attr',
      'disabled',
      'disabled'
    );
    cy.get('#password').type(password);
    cy.contains('button', /SIGN UP/i).should(
      'not.have.attr',
      'disabled',
      'disabled'
    );
  });

  it('should create proper request and response of 201 CREATED with right username', () => {
    const email = generateRandomString(5) + '@test.ca';
    const password = 'wasd1wasd';
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(email);
    cy.get('#password').type(password);
    cy.get('#passwordConfirmation').type(password);

    const registerLink = Cypress.env('backendUrl') + 'user/register';
    cy.log(registerLink);
    cy.intercept('POST', registerLink).as('register');
    const alertShown = cy.stub().as('registerSuccessAlert');
    cy.contains('button', /SIGN UP/i).click();

    cy.wait('@register').then((interception) => {
      // @ts-ignore
      expect(interception.response.statusCode).to.equal(201);
      // @ts-ignore
      expect(interception.response.body.username).to.deep.equal(email);
    });
    cy.on('window:alert', alertShown);
    cy.get('@registerSuccessAlert').should(
      'have.been.calledOnceWith',
      'Register succeed. Welcome! :D'
    );
  });

  it('should give error when username has already been taken', () => {
    const email = generateRandomString(5) + '@test.ca';
    const password = 'wasd1wasd';
    cy.get('#passwordConfirmation').click();
    cy.get('#username').clear().type(email);
    cy.get('#password').type(password);
    cy.get('#passwordConfirmation').type(password);

    const registerLink = Cypress.env('backendUrl') + 'user/register';
    cy.contains('button', /SIGN UP/i).click();

    // create the second call and check response
    cy.intercept('POST', registerLink).as('register');
    cy.contains('button', /SIGN UP/i).click();

    cy.wait('@register').then((interception) => {
      // @ts-ignore
      expect(interception.response.statusCode).to.equal(400);
      cy.on('window:alert', (message) => {
        expect(message).to.equal('UserExceptions: Username name has already been taken.');
      });
    });
  });
});
