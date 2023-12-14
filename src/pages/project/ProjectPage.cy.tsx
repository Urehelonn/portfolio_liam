import React from 'react'
import ProjectPage from './ProjectPage'

describe('<ProjectPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjectPage />)
  })
})