import React from 'react'
import HoverColourChangeCharacter from '@/components/common/hoverColourChangeCharacter/HoverColourChangeCharacter'

describe('<HoverColourChangeCharacter />', () => {
  it('renders', () => {
    const content = 'Test'
    cy.mount(<HoverColourChangeCharacter content={content} />)
  })
})