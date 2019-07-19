describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000/') // change URL to match your dev URL

    cy.get('h1.Header').should('contain', 'React Wars')
    cy.get('h3').should('contain', 'Luke')
  })
})