import React from 'react'
import NotFoundPage from './NotFoundPage'

describe('<NotFoundPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NotFoundPage />)
  })
})