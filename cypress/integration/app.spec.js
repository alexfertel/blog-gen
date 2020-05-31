/// <reference types="cypress" />

describe('The Home Page', () => {
  it('renders seminars and allows to navigate to them', () => {
    cy.visit('/');

    cy.get('h2').contains('.font-medium .text-gray-800').click();
    
    cy.url().should('include', 'seminar');
  });
});
