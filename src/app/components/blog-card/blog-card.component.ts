import { Component, Input } from '@angular/core';
import { Blog } from '../../pages/blog/blog';
import { LinkInjectorService } from '../../services/link-injector.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent {
  @Input() blogPost: Blog | null = null;

  constructor(private linkInjector: LinkInjectorService) {
    linkInjector.createLink('preconnect', 'https://images.unsplash.com');
  }
}
