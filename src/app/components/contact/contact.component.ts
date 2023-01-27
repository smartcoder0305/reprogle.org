import { Component } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  environment = environment;
  resolveKey(event: string | null) {
    console.log(event);
  }
}
