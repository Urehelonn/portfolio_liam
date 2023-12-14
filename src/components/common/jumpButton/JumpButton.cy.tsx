import React, { useRef } from 'react';
import JumpButton from './JumpButton'

describe('<JumpButton />', () => {
  it('renders', () => {
    const objSection = useRef(null);
    cy.mount(<JumpButton jumpToPos={objSection} />)
  })
})