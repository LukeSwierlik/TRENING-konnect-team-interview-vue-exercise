// https://docs.cypress.io/api/introduction/api.html


describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the app root url', () => {
    cy.contains('h1', 'Services');
  });

  xit('check items', () => {
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Ergonomic Granite Pants');
    });
  });

  it('check items length', () => {
    cy.get('.kong-card.card.border').should('have.length', 12);
  });

  xit('search ergonomic phrase and check length items', () => {
    cy.wait(1000).get('input[name="searchTerm"]').type('ergonomic');
    cy.get('.kong-card.card.border').should('have.length', 3);
  });

  xit('check next page', () => {
    cy.wait(1000);

    cy.get('button[name="next"').click();
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Gorgeous Rubber Chicken');
    });
  });

  xit('check previous page', () => {
    cy.wait(1000);

    cy.get('button[name="next"').click();
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Gorgeous Rubber Chicken');
    });

    cy.get('button[name="previous"').click();
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Ergonomic Granite Pants');
    });
  });

  it('waiting for data', () => {
    cy.intercept({
      method: 'GET', // Route all GET requests
      url: '/api/service_packages', // that have a URL that matches '/users/*'
    }, []).as(
      'fetchServices'
    );
    cy.wait('@fetchServices');

    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Handmade Granite Bacon');
    });
  });
});
