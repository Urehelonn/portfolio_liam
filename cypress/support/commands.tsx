/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//

// Cypress.Commands.add(
//   'nextMount',
//   (component: ReactNode, options?: CustomMountOptions): Cypress.Chainable<MountReturn> => {
//     // Use the default store if one is not provided
//     const { reduxStore = store.getState(), ...mountOptions } = options || {};
//
//     const wrapped = <Provider store={reduxStore}>{component}</Provider>;
//     return mount(wrapped, mountOptions);
//   }
// );

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

/// <reference types="cypress" />

// Cypress.Commands.add('waitForAlert', { prevSubject: 'optional' }, () => {
//   return cy.window().then((win) => {
//     return new Promise<string>((resolve) => {
//       cy.on('window:alert', (text) => {
//         resolve(text);
//       });
//       // Return a promise that resolves when the alert is caught
//       cy.wrap(win);
//     });
//   });
// });
declare namespace Cypress {
  interface Chainable<Subject = any> {
    waitForAlert(): Chainable<string>;
  }
}

Cypress.Commands.add('waitForAlert', { prevSubject: 'optional' }, () => {
  return cy.window().then((win) => {
    return new Promise<string>((resolve) => {
      cy.on('window:alert', (text) => {
        resolve(text);
      });
    });
  });
});

