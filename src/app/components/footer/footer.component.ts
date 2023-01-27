import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  setTwitter(state: boolean) {}

  setInstagram(state: boolean) {}

  getYear(): number {
    return new Date().getFullYear();
  }
}
