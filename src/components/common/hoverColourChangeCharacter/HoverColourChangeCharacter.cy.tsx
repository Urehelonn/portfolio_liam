import React from 'react'
import HoverColourChangeCharacter from './HoverColourChangeCharacter'

describe('<HoverColourChangeCharacter />', () => {
  it('renders', () => {
    const content = 'Test'
    cy.mount(<HoverColourChangeCharacter content={content} />)
  })
})