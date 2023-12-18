import React from 'react'
import CopyRightFooter from '@/components/common/copyRightFooter/CopyRightFooter'

describe('<CopyRightFooter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CopyRightFooter />)
  })
})