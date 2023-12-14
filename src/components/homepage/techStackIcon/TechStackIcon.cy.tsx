import React from 'react'
import TechStackIcon from './TechStackIcon'

describe('<TechStackIcon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TechStackIcon />)
  })
})