import React from 'react'
import AppsPage from './AppsPage'

describe('<AppsPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppsPage />)
  })
})