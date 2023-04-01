import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { Blog } from './blog';
import { BehaviorSubject, Observable } from 'rxjs';

const getBlogs = (
  collection: CollectionReference<Blog>
): BehaviorSubject<Blog[]> => {
  const blogPosts = new BehaviorSubject<Blog[]>([]);

  // noinspection JSIgnoredPromiseFromCall
  collectionData(collection, { idField: 'id' }).forEach((blogPost) => {
    blogPosts.next(blogPost);
  });

  return blogPosts;
};

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogPosts = getBlogs(
    collection(this.store, 'blog') as CollectionReference<Blog>
  ) as Observable<Blog[]>;

  constructor(
    private store: Firestore,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigate(blog: Blog) {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate([blog.id], { relativeTo: this.route });
  }
}
