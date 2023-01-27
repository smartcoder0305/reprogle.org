import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() headerText = 'Hello, my name is';
  @Input() mainText = 'Nate Reprogle';
  @Input() footerText = 'IT Enthusiast';
  @Input() image = '/assets/Profile.jpg';
  @Input() imageAlt = 'Nate Reprogle';
}
