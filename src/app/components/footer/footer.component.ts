import { Component } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';
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
  constructor(public popUp: PopUpService) {}

  setPopUp(state: boolean) {
    this.popUp.setPopUp(state);
  }

  getYear(): number {
    return new Date().getFullYear();
  }
}
