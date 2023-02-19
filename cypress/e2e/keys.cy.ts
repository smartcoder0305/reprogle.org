// Before each test, navigate to the keys slug to start with a clean slate
// Most of these tests just ensure text is rendering properly. I have yet to do testing for height/width per device, but that will happen in the future
beforeEach(() => {
  cy.visit('/keys');
});

describe('Nav Bar', () => {
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

  it('should navigate to /contact when clicked', () => {
    cy.get('app-navbar').contains('Contact Me').click();
    cy.url().should('include', '/contact');
  });
});

describe('Keys page', () => {
  it('Exists', () => {
    // Once we visit the page, if the page contains the following text then we know the page has loaded successfully
    cy.get('app-header').contains('PGP & SSH Keys');
  });

  it('Should be visible', () => {
    cy.get('app-header').should('be.visible');
  });
});

describe('PGP Key', () => {
  it('Exists', () => {
    cy.get('#pgp-key').contains('Below is my PGP key I use');
    cy.get('#pgp-key').contains(
      'mDMEYugSJRYJKwYBBAHaRw8BAQdAKcublhX5k/SKdVEK7D7UQenuyFxdFOcNlDTT'
    );
  });

  it('Should be visible', () => {
    cy.get('#pgp-key').scrollIntoView().should('be.visible');
  });
});

describe('SSH ED25519 Key', () => {
  it('Exists', () => {
    cy.get('#ssh-ed25519-key').contains('Below is my SSH key');
    cy.get('#ssh-ed25519-key').contains(
      'AAAAC3NzaC1lZDI1NTE5AAAAIHXj4naNfNjrKvj1Gm0WBAICOrmh3YEQe1h5KHmkFMMf'
    );
  });

  it('Should be visible', () => {
    cy.get('#ssh-ed25519-key').scrollIntoView().should('be.visible');
  });
});

describe('SSH RSA Key', () => {
  it('Exists', () => {
    cy.get('#ssh-rsa-key').contains('I also have an old RSA Key');
  });

  it('Key should not be visible until clicked', () => {
    cy.get('#ssh-rsa-key #collapsable-key').should('not.exist');
    cy.get('#ssh-rsa-key button').click();
    cy.get('#ssh-rsa-key #collapsable-key')
      .should('exist')
      .should('be.visible');
    cy.get('#ssh-rsa-key #collapsable-key').contains('ssh-rsa');
    cy.get('#ssh-rsa-key button').click();
    cy.get('#ssh-rsa-key #collapsable-key').should('not.exist');
  });
});
