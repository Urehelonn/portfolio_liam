import React from 'react'
import UnderConstruction from './UnderConstruction'

describe('<UnderConstruction />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UnderConstruction />)
  })
})