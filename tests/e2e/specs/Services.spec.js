const { mock } = require('../fixtures/mock');

describe('General tests', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/api/service_packages'
    }, mock).as(
      'fetchServices'
    );
    cy.visit('/');
  });

  it('check items', () => {
    cy.wait('@fetchServices');
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Handmade Granite Bacon');
    });
  });

  it('check items length', () => {
    cy.wait('@fetchServices');
    cy.get('.kong-card.card.border').should('have.length', 12);
  });
});
