describe('Phoenix Airlines Flight Booking', () => {
    beforeEach(() => {
        // Visit the landing page before each test
        cy.visit('/');
    });

    it('should navigate to flight search page', () => {
        cy.contains('Search Flights').click(); // Click on the link to search flights
        cy.url().should('include', '/flight-search'); // Verify the URL includes flight-search
    });

    it('should search for flights', () => {
        cy.contains('Search Flights').click();
        cy.url().should('include', '/flight-search');

        // Fill in the flight search form
        cy.get('input[placeholder="Source"]').type('New York'); // Enter source city
        cy.get('input[placeholder="Destination"]').type('Los Angeles'); // Enter destination city
        cy.get('input[type="date"]').type('2023-12-25'); // Enter date of journey

        // Click the search button
        cy.contains('Search Flights').click(); // Adjust this if you have a specific button

        // Verify the flight search results page
        cy.url().should('include', '/flight-booking'); // Assuming it redirects to booking
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
        cy.get('input[placeholder="Name"]').type('John Doe'); // Enter name
        cy.get('input[placeholder="Email"]').type('john.doe@example.com'); // Enter email
        cy.contains('Confirm Booking').click(); // Click the confirm booking link/button

        // Verify the confirmation page
        cy.url().should('include', '/confirmation'); // Verify the URL
        cy.contains('Booking Confirmation').should('be.visible'); // Check for confirmation message
        cy.contains('John Doe').should('be.visible'); // Verify name in confirmation
        cy.contains('john.doe@example.com').should('be.visible'); // Verify email in confirmation
    });
});
