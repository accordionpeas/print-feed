import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the home page', () => {
  cy.visit('/')
})

When('I do not scroll the page', () => {})

When('I scroll the page', () => {
  cy.wait(2000)
  cy.scrollTo(0, 2000)
})

Then('I see the first two pages of results', () => {
  cy.findByText('Fake title 1').should('exist')
  cy.findByText('Fake description 1').should('exist')

  cy.findByText('Fake title 11').should('exist')
  cy.findByText('Fake description 11').should('exist')

  cy.findByText('Fake title 21').should('not.exist')
  cy.findByText('Fake description 21').should('not.exist')
})

Then('I see the first three pages of results', () => {
  cy.findByText('Fake title 1').should('exist')
  cy.findByText('Fake description 1').should('exist')

  cy.findByText('Fake title 11').should('exist')
  cy.findByText('Fake description 11').should('exist')

  cy.findByText('Fake title 21').should('exist')
  cy.findByText('Fake description 21').should('exist')
})
