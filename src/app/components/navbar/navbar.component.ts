import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menu = false;

  setMenu(status: boolean) {
    this.menu = status;
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.toggle('hidden');
    console.log(`Setting Mobile Menu State to ${this.menu}`);
  }
}
