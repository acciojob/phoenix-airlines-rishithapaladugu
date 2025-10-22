describe("Phoenix Airlines", () => {
  it("searches and books a one-way flight", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Book a Flight").click();
    cy.get('select[name="type"]').select("one-way");
    cy.get('input[name="source"]').type("Delhi");
    cy.get('input[name="destination"]').type("Mumbai");
    cy.get('input[name="date"]').type(new Date().toISOString().slice(0, 10));
    cy.contains("Search").click();
    cy.get(".book-flight").first().click();
    cy.get('input[type="text"]').eq(0).type("Amit Sharma");
    cy.get('input[type="text"]').eq(1).type("amit@mail.com");
    cy.get('input[type="text"]').eq(2).type("9876543210");
    cy.contains("Confirm Booking").click();
    cy.contains("Booking Confirmed");
  });
});
