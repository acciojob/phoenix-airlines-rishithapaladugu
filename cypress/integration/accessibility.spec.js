describe('Accessibility Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Visit your landing page
    });

    it('should have no accessibility violations on the landing page', () => {
        cy.injectAxe(); // Inject the axe-core library
        cy.checkA11y(); // Check for accessibility violations
    });

    it('should have no accessibility violations on the flight search page', () => {
        cy.contains('Search Flights').click(); // Navigate to flight search
        cy.url().should('include', '/flight-search');
        cy.injectAxe();
        cy.checkA11y(); // Check for accessibility violations
    });
});
