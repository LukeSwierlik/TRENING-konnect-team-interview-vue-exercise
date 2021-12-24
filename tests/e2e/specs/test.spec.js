// https://docs.cypress.io/api/introduction/api.html

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

  it('Visits the app root url', () => {
    cy.contains('h1', 'Services');
  });

  it('waiting for data', () => {
    cy.wait('@fetchServices');
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Handmade Granite Bacon');
    });
  });
});
