import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { collection, doc, Firestore, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  private blogId: string | null;
  error = false;
  blog: Blog | null = null;
  loading = true;
  notFound = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Firestore,
    private router: Router
  ) {
    this.blogId = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    getDoc(doc(collection(this.store, 'blog'), `${this.blogId}`)).then(
      (document) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'text';

        if (document.exists()) {
          this.blog = document.data() as Blog;

          xhr.onloadend = () => {
            // We know at this point the blog will be not null because we've already check if it exists, set the blog to the document data, and have *not* send the XHR request yet
            // Therefore, we can safely assume the blog exists and cast the type as such
            (this.blog as Blog).body = xhr.response;
            this.loading = false;
          };

          if (this.blog.postUrl === '') {
            this.error = true;
            this.loading = false;
            // TODO: Add a system to report errors here
            return;
          }
          xhr.open('GET', this.blog.postUrl);
          xhr.send();
        } else {
          this.notFound = true;
          this.loading = false;
        }
      }
    );
  }

  navigate() {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/blog']);
  }
}
