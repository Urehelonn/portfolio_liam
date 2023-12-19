import React from 'react'
import ProjectPage from '@/pages/project/ProjectPage'
import * as NextRouter from 'next/router';

describe('<ProjectPage />', () => {
  it('renders', () => {
    const pathname = 'fake-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
    cy.mount(<ProjectPage />)
  })
})