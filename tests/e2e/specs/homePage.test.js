describe('Test Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Title need be Mind Reader', () => {
    cy.title().should('eq', 'Mind Reader')
  })

  it('Have a link \'Start\'', () => {
    cy.contains('a', 'Start')
  })
})
