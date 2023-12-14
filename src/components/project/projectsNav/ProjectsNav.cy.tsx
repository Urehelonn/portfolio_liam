import React from 'react'
import ProjectsNav from './ProjectsNav'

describe('<ProjectsNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjectsNav />)
  })
})