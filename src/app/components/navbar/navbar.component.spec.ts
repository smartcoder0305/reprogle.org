import { NavbarComponent } from './navbar.component';
describe('HeaderComponent', () => {
  it('mounts', () => {
    cy.mount(NavbarComponent);
  });
});
