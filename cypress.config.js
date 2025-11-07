const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    env: {
      username: 'testuser',
      password: 'testpassword',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
  describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type(Cypress.env('username'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
  
    },
  },
});
