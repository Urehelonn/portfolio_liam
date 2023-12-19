import React from 'react'
import AppsPage from '@/pages/apps/AppsPage'
import * as NextRouter from 'next/router'

describe('<AppsPage />', () => {
  it('renders', () => {
    const pathname = 'fake-path'
    const push = cy.stub()
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push })
    cy.mount(<AppsPage />)
  })
})