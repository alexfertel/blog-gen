/// <reference types="cypress" />

describe('The Home Page', () => {
  it('renders seminars', () => {
    cy.visit('/');

    cy.get('h2.font-medium.text-gray-800').should('have.length.gte', 25);
  });

  for (let i = 0; i < 3; i++) {
    const index = (Math.random() * 10).toFixed(0) % 25;
    it(`allows navigation to seminar ${index + 1}`, () => {
      cy.visit('/');

      cy.get('h2.font-medium.text-gray-800').then($cards => {
        cy.wrap($cards[index]).click();
        cy.url().should('include', `seminar-${index + 1}`);
      });
    });
  }
});
