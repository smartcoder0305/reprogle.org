import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  headerText = 'Hello, my name is';
  mainText = 'Nate Reprogle';
  footerText = 'IT Enthusiast';
  image = '/assets/Profile.jpg';
  imageAlt = 'Nate Reprogle';
}
