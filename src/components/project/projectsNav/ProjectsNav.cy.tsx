import React from 'react';
import ProjectsNav from './ProjectsNav';

describe('<ProjectsNav />', () => {
  it('renders', () => {
    const projectsTitle = [
      'Test Title 1',
      'Test Title 2',
      'Test Title 3',
      'Test Title 4',
    ];
    const setActiveProj = (ind: number) => {};
    cy.mount(
      <ProjectsNav projects={projectsTitle} setActiveProject={setActiveProj} />
    );
  });
});
