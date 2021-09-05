/// <reference types="cypress" />

describe('navigation bar functionality', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000')
    });

    it('navigate to each page', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('#testimonial-link').click();
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/Testimonials');
      });
      
      cy.get('#learn-more-link').click();
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/LearnMore');
      });

      cy.get('#home-link').click();
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/');
      });
    });

      
    it('login', () => {
        cy.get('#login-button').click();

        const parentBodySelector = '#login-modal-container > .modal-content > form > .modal-body > div',
              parentFooterSelector = '#login-modal-container > .modal-content > form > .modal-footer',
              usernameSelector = `${parentBodySelector} > input[name="username"]`,
              passwordSelector = `${parentBodySelector} > input[name="password"]`,
              seePasswordSelector = `${parentBodySelector} > #see-password-button`,
              rememberMeSelctor = `${parentBodySelector} > input[name="rememberMe"]`,
              loginSelector = `${parentFooterSelector} > #login-submit-button`;

        cy.get(usernameSelector).type('Shayna123');
        cy.get(passwordSelector).type('P@ssw0rd');
        cy.get(seePasswordSelector).click();
        cy.get(passwordSelector).should('have.attr', 'type', 'text');
        cy.get(rememberMeSelctor).dblclick();
        cy.get(loginSelector).click();
        //cy.get('#logout-button').should('not.exist');

    });

    it('logout', () => {
        // cy.get('#logout-button').click();
        // cy.get('#login-button').should('not.exist');
    });

});