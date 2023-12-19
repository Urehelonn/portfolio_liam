import React from 'react';
import Homepage from '@/pages/homepage/HomePage';
import * as NextRouter from 'next/router';

describe('<Homepage />', () => {
  it('renders', () => {
    const pathname = 'fake-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
    cy.mount(<Homepage />);
  });
});
