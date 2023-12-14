import React from 'react'
import JumpButton from './JumpButton'

describe('<JumpButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<JumpButton />)
  })
})