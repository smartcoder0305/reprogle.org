import { Component, Input } from '@angular/core';
import { Blog } from '../../pages/blog/blog';
import { LinkInjectorService } from '../../services/link-injector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent {
  @Input() blogPost: Blog | null = null;

  constructor(
    private linkInjector: LinkInjectorService,
    private router: Router
  ) {
    linkInjector.createLink('preconnect', 'https://images.unsplash.com');
  }

  navigate(blog: Blog) {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/blog', 'post', blog.id]);
  }
}
