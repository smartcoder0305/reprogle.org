// Before each test, navigate to the keys slug to start with a clean slate
beforeEach(() => {
  cy.visit('/blog');
});

describe('BlogComponent', () => {
  it('Exists', () => {
    cy.get('app-navbar').contains('About');
  });
})
