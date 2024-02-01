import React from 'react'
import Home from './index'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.clock();
    cy.mount(<Home />)
    cy.get('p').contains('Waiting for timeout');
    cy.tick(4000);
    cy.get('p').contains('Timeout complete');
  })
})
