import React from 'react';
import LoginPage from '@/pages/login/LoginPage';
import { Provider } from 'react-redux';
import { store } from '@/reduxs/store';
import * as NextRouter from 'next/router';

describe('<LoginPage />', () => {
  it('renders', () => {
    cy.window().its('Cypress');

    const pathname = 'fake-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });

    cy.mount(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
  });
});
