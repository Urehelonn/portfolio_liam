import React from 'react';
import TechStackIcon from '@/components/homepage/techStackIcon/TechStackIcon';

describe('<TechStackIcon />', () => {
  it('renders', () => {
    cy.mount(
      <TechStackIcon
        width={150}
        height={80}
        alt={'NextJs'}
        src={'/businessIcons/git.png'}
      />
    );
  });
});
