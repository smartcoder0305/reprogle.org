// Before each test, navigate to the site /contact slug to start with a clean slate
// Most of these tests just ensure text is rendering properly. I have yet to do testing for height/width per device, but that will happen in the future
beforeEach(() => {
  cy.visit('/contact');
});

describe('Nav Bar', () => {
  // noinspection DuplicatedCode
  it('Exists', () => {
    cy.get('app-navbar').contains('About');
  });

  it('Should be visible', () => {
    cy.get('app-navbar').should('be.visible');
  });

  it('should navigate to / when clicked', () => {
    cy.get('app-navbar').contains('About').click();
    cy.url().should('include', '/');
  });

  it('should navigate to /keys when clicked', () => {
    cy.get('app-navbar').contains('Keys').click();
    cy.url().should('include', '/keys');
  });
});

describe('Contact Page', () => {
  it('Exists', () => {
    // Once we visit the page, if the page contains the following text then we know the page has loaded successfully
    cy.get('app-header').contains('Contact Me');
  });

  it('Should be visible', () => {
    cy.get('app-header').should('be.visible');
  });
});

describe('Contact Field', () => {
  it('Exists', () => {
    cy.get('#contact').contains('Send Me a Message');
  });

  it('Should be visible', () => {
    cy.get('#contact').scrollIntoView().should('be.visible');
  });

  it('Should contain contact items', () => {
    cy.intercept('https://api.reprogle.org/verify-turnstile').as('verify');
    cy.get('#fname').type('Cypress');
    cy.get('#lname').type('Test');
    cy.get('#email').type('cypress.test@cypress.com');
    cy.get('#message').type(
      'This is an automated message from cypress testing'
    );
    cy.get('#thanks-message').should('not.be.visible');
    cy.get('#contact-form form button').should('be.visible');
    cy.wait('@verify');
    cy.get('#contact-form form button').click();
    cy.get('#thanks-message').should('be.visible');
    cy.get('#contact-form form button').should('not.be.visible');
  });
});
