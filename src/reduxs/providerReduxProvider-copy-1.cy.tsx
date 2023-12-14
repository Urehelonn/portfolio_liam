import React from 'react'
import ReduxProvider from './provider'

describe('<ReduxProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReduxProvider />)
  })
})