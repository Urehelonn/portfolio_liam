import React, { useRef } from 'react';
import JumpButton from '@/components/common/jumpButton/JumpButton';

describe('<JumpButton />', () => {
  it('renders', () => {
    const ref = React.createRef();
    // @ts-ignore
    cy.mount(<form ref={ref} />);
    // @ts-ignore
    cy.mount(<JumpButton jumpToPos={ref} />);
  });
});
