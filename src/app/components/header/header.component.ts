import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() headerText = 'Header';
  @Input() mainText = 'Main';
  @Input() footerText = 'Footer';
  @Input() image = 'ImgUrl';
  @Input() imageAlt = 'Image Alt';
}
