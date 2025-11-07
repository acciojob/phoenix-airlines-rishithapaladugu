// cypress/integration/flightBooking.spec.js

describe('Phoenix Airlines Flight Booking', () => {
    beforeEach(() => {
        // Visit the landing page before each test
        cy.visit('/');
    });

    it('should navigate to flight search page', () => {
        cy.contains('Search Flights').click(); // Assuming there's a link or button with this text
        cy.url().should('include', '/flight-search'); // Verify the URL
    });

    it('should search for flights', () => {
        cy.contains('Search Flights').click();
        cy.url().should('include', '/flight-search');

        // Fill in the flight search form
        cy.get('input[placeholder="Source"]').type('New York');
        cy.get('input[placeholder="Destination"]').type('Los Angeles');
        cy.get('input[type="date"]').type('2023-12-25'); // Example date

        // Click the search button
        cy.contains('Search Flights').click();

        // Verify the flight search results (this assumes you have a way to check for results)
        cy.url().should('include', '/flight-booking'); // Assume it redirects to booking
    });

    it('should book a flight', () => {
        cy.contains('Search Flights').click();
        cy.url().should('include', '/flight-search');

        // Fill in the flight search form
        cy.get('input[placeholder="Source"]').type('New York');
        cy.get('input[placeholder="Destination"]').type('Los Angeles');
        cy.get('input[type="date"]').type('2023-12-25');
        cy.contains('Search Flights').click();

        // Click on the book flight link/button (assuming you have a class name 'book-flight')
        cy.get('.book-flight').first().click(); // Click the first available flight

        // Fill in the booking form
        cy.get('input[placeholder="Name"]').type('John Doe');
        cy.get('input[placeholder="Email"]').type('john.doe@example.com');
        cy.contains('Confirm Booking').click(); // Click the confirm booking link/button

        // Verify the confirmation page
        cy.url().should('include', '/confirmation');
        cy.contains('Booking Confirmation').should('be.visible');
        cy.contains('John Doe').should('be.visible');
        cy.contains('john.doe@example.com').should('be.visible');
    });
});
