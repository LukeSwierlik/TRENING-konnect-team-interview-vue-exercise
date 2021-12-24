const { mock } = require("../fixtures/mock");

describe('General tests', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/api/service_packages',
    }, mock).as(
      'fetchServices'
    );
    cy.visit('/');
  });

  it('search ergonomic phrase and check length items', () => {
    cy.wait('@fetchServices').get('input[data-cy="searchBar"]').type('ergonomic');
    cy.get('.kong-card.card.border').should('have.length', 6);
  });

  it('reset search', () => {
    cy.wait('@fetchServices').get('input[data-cy="searchBar"]').type('ergonomic');
    cy.get('.kong-card.card.border').should('have.length', 6);

    cy.get('input[data-cy="searchBar"]').clear();
    cy.get('.kong-card.card.border').should('have.length', 12);
  });
});
