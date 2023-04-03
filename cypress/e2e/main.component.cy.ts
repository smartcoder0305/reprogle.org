// Before each test, navigate to the site root to start with a clean slate
// Most of these tests just ensure text is rendering properly. I have yet to do testing for height/width per device, but that will happen in the future
beforeEach(() => {
  cy.visit('/');
});

describe('Nav Bar', () => {
  it('Exists', () => {
    cy.get('app-navbar').contains('About');
  });

  it('Should be visible', () => {
    cy.get('app-navbar').should('be.visible');
  });

  it('should navigate to /contact when clicked', () => {
    cy.get('app-navbar').contains('Contact Me').click();
    cy.url().should('include', '/contact');
  });

  it('should navigate to /keys when clicked', () => {
    cy.get('app-navbar').contains('Keys').click();
    cy.url().should('include', '/keys');
  });
});

describe('Home Page', () => {
  it('Exists', () => {
    // Once we visit the page, if the page contains the following text then we know the page has loaded successfully
    cy.get('app-header').contains('Hello, my name is');
  });

  it('Should be visible', () => {
    cy.get('app-header').should('be.visible');
  });
});

describe('About Me', () => {
  it('Exists', () => {
    cy.get('#about-me').contains('I am a Software Engineer');
  });

  it('Should be visible', () => {
    cy.get('#about-me p').scrollIntoView().should('be.visible');
  });
});

describe('Who I am', () => {
  it('Exists', () => {
    cy.get('#who-i-am').contains('Who I am');
  });

  it('Should be visible', () => {
    cy.get('#who-i-am p').scrollIntoView().should('be.visible');
  });
});

describe('Skills & Experience', () => {
  it('Exists', () => {
    cy.get('#skills-and-experience #skills').contains('Skills');
  });

  it('Should be visible', () => {
    cy.get('#skills-and-experience #skills')
      .scrollIntoView()
      .should('be.visible');
  });

  it('Contains all children', () => {
    cy.get('#skills')
      .scrollIntoView()
      .within(() => {
        cy.get('p').should('have.length', 5);
      });
  });

  // Check that all the skills I have are listed in the skills div
  it('Contains all skills', () => {
    cy.get('#skills')
      .scrollIntoView()
      .within(() => {
        cy.contains('Bachelors in Business Administration');
        cy.contains('Experience in web development frameworks');
        cy.contains('Experience with container orchestration');
        cy.contains('Experience with Google Cloud Platform and AWS');
        cy.contains('Ability to grasp new concepts quickly');
      });
  });
});

describe('Experience', () => {
  it('Exists', () => {
    cy.get('#skills-and-experience #experience').contains('My Experience');
  });

  it('Should be visible', () => {
    cy.get('#skills-and-experience #experience')
      .scrollIntoView()
      .should('be.visible');
  });

  // Check that all the skills I have are listed in the skills div
  it('Contains app-resume-item tags', () => {
    cy.get('#experience')
      .scrollIntoView()
      .within(() => {
        cy.get('app-resume-item').should('have.length', 4);
      });
  });

  it('Contains correctly formatted resume items', () => {
    cy.get('#experience')
      .scrollIntoView()
      .within(() => {
        cy.contains('Software Engineer I');
        cy.contains('Contact Center Specialist');
        cy.contains('Transportation Manager');
        cy.contains('Customer Experience Representative');
      });
  });
});

describe('Footer', () => {
  it('Exists', () => {
    cy.get('app-footer').contains('Get in touch');
  });

  it('Should be visible', () => {
    cy.get('app-footer').scrollIntoView().should('be.visible');
  });
});
