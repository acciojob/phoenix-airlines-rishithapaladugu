
describe('File Upload Tests', () => {
    beforeEach(() => {
        cy.visit('/upload'); // Visit the upload page
    });

    it('should upload a file successfully', () => {
        const filePath = 'path/to/your/file.txt'; // Specify the path to your file
        cy.get('input[type="file"]').attachFile(filePath); // Use the attachFile command
        cy.get('button[type="submit"]').click(); // Submit the form
        cy.contains('Upload successful').should('be.visible'); // Verify the upload success message
    });
});
