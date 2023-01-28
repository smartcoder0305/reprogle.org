import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.css'],
})
export class ResumeItemComponent {
  @Input() timeRange: string = 'Time Range';
  @Input() company: string = 'Company';
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
}
