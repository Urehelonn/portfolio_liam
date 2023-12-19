import React from 'react';
import NotFoundPage from '@/pages/404/NotFoundPage';
import * as NextRouter from 'next/router';

describe('<NotFoundPage />', () => {
  it('renders', () => {
    const pathname = 'fake-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
    cy.mount(<NotFoundPage />);
  });
});
