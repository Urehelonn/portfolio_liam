import React from 'react'
import UnderConstruction from '@/pages/underConstruction/UnderConstruction'
import * as NextRouter from 'next/router';

describe('<UnderConstruction />', () => {
  it('renders', () => {
    cy.mount(<UnderConstruction />)
    const pathname = 'fake-path'
    const push = cy.stub()
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push })
    cy.mount(<UnderConstruction />)
  })
})