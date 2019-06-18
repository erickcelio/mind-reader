const clickColumnButtonThreeTimes = () => {
  cy.contains('button', '1').click()
  cy.contains('button', '2').click()
  cy.contains('button', '3').click()
}

describe('Test Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Start').click()
  })

  it('Trick page should have a instructions', () => {
    cy.get('[data-cy=instructions]')
  })

  it('I should have 3 columns of Cards', () => {
    cy.get('#cards').children().should('have.length', 3)
  })

  it('Each column need have a button', () => {
    cy.get('#cards').children().children().contains('button', '1')
    cy.get('#cards').children().children().contains('button', '2')
    cy.get('#cards').children().children().contains('button', '3')
  })

  it('I should have 21 cards', () => {
    cy.get('.card').should('have.length', 21)
  })

  it('I need click button 3 times', () => {
    clickColumnButtonThreeTimes()
  })
})

describe('After click the buttons 3 times', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Start').click()
    clickColumnButtonThreeTimes()
  })

  it('Need to have a final instruction', () => {
    cy.contains('p', 'That\'s is your card!')
  })

  it('Need to have a final card', () => {
    cy.get('.card').should('have.length', 1)
  })

  it('Need to have a Play Again button', () => {
    cy.contains('button', 'Play Again')
  })
})

describe('After click on Play Again button', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Start').click()
    clickColumnButtonThreeTimes()
    cy.contains('button', 'Play Again').click()
  })

  it('Need to have 3 columns again', () => {
    cy.get('#cards').children().should('have.length', 3)
  })

  it('Need to have 21 cards again', () => {
    cy.get('.card').should('have.length', 21)
  })
})
