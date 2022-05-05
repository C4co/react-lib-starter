describe('navigation', () => {
  it('Check home page', () => {
    cy.visit('/')
    cy.contains('My first component!')
  })
})

export {}
