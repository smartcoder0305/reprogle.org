import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('0.3s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class FooterComponent {
  instagramPopup = false;
  twitterPopup = false;

  setPopUp(state: boolean, site: string) {
    switch (site) {
      case 'instagram':
        this.instagramPopup = state;
        break;
      case 'twitter':
        this.twitterPopup = state;
        break;
      default:
        console.warn(
          `Popup for site ${site} was called, but shouldn't exist. Check the code!`
        );
    }
  }

  getYear(): number {
    return new Date().getFullYear();
  }
}
