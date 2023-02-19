import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('mounts', () => {
    cy.mount(AppComponent);
  });

  it(`should have as title 'Home - Nate Reprogle'`, () => {
    cy.title().should('eq', 'Home - Nate Reprogle');
  });
});
