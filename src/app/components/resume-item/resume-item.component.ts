import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.css'],
})
export class ResumeItemComponent {
  @Input() timeRange = 'Time Range';
  @Input() company = 'Company';
  @Input() title = 'Title';
  @Input() description = 'Description';
}
