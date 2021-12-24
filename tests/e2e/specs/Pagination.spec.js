const { mock } = require('../fixtures/mock');

describe('Pagination', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/api/service_packages'
    }, mock).as(
      'fetchServices'
    );
    cy.visit('/');
  });

  it('check next page', () => {
    cy.wait('@fetchServices');

    cy.get('button[data-cy="btnNextPage"').click();
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Sleek Granite Tuna');
    });
  });

  it('check previous page', () => {
    cy.wait('@fetchServices');
    cy.get('button[data-cy="btnNextPage"').click();
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Sleek Granite Tuna');
    });

    cy.get('button[data-cy="btnPreviousPage"').click();
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Handmade Granite Bacon');
    });
  });
});
