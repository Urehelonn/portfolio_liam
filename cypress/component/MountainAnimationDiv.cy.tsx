import React from 'react';
import MountainAnimationDiv from '@/components/common/mountainAnimationDiv/MountainAnimationDiv';

describe('<MountainAnimationDiv />', () => {
  it('renders', () => {
    cy.mount(<MountainAnimationDiv height={400} minWidth={800} />);
  });
});
