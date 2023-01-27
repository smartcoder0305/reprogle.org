import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  headerText: string = 'Hello, my name is';
  mainText: string = 'Nate Reprogle';
  footerText: string = 'IT Enthusiast';
  image: string = '/assets/Profile.jpg';
  imageAlt: string = 'Nate Reprogle';
}
