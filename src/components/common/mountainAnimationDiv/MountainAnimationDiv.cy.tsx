import React from 'react'
import MountainAnimationDiv from './MountainAnimationDiv'

describe('<MountainAnimationDiv />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MountainAnimationDiv />)
  })
})