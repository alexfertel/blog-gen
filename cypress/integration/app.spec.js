/// <reference types="cypress" />

describe('The Home Page', () => {
  it('renders seminars and allows to navigate to them', () => {
    cy.visit('/');

    cy.get('h2').contains('Seminario').click();
    
    cy.url().should('include', 'seminar');
  });
});
