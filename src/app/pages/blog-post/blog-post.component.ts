import { Component } from '@angular/core';
import { Blog } from '../blog/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  private blogId: string | null;

  constructor(private router: ActivatedRoute) {
    this.blogId = router.snapshot.paramMap.get('id');
  }
}
