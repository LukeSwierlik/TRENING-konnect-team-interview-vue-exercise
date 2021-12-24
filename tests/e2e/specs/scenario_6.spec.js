describe('Scenario 6', () => {
  before(() => {
    cy.loadedServicesFailure();
  });

  it('check error state', () => {
    cy.get('[data-cy="ErrorState"]').contains('Something is wrong');
  });
});

