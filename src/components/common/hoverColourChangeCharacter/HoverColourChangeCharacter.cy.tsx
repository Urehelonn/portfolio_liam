import React from 'react'
import HoverColourChangeCharacter from './HoverColourChangeCharacter'

describe('<HoverColourChangeCharacter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HoverColourChangeCharacter />)
  })
})