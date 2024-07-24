// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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

Cypress.Commands.add('recovery', () => {
    cy.fixture('username.json').then((data) => {
        const nick = data.nick;
        cy.get('div.auth-bar__item.auth-bar__item--text').click();
        cy.contains('Я не помню пароль').click();
        cy.get('input[type="text"]').type(nick);
        //cy.get('input[placeholder="Ник, e-mail или номер телефона"]').type(nick);
        cy.get('button[type="submit"]').click(); 
    });
});

declare namespace Cypress {
    interface Chainable {
      recovery(): Chainable<void>;
    }
  }