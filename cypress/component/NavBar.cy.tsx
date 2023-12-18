import React from 'react';
import NavBar from '@/components/common/navbar/NavBar';
import * as NextRouter from 'next/router';

describe('<NavBar />', () => {
  it('renders', () => {
    const pathname = 'fake-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
    cy.mount(<NavBar />);
  });
});
