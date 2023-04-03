import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { Blog } from './blog';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
export class BlogComponent implements OnInit, OnDestroy {
  constructor(
    private store: Firestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  blogPosts: Observable<Blog[]> | undefined;
  totalPosts = 0;
  page = 0;
  subscription: Subscription | undefined = undefined;

  ngOnInit(): void {
    this.blogPosts = getBlogs(
      collection(this.store, 'blog') as CollectionReference<Blog>
    ).pipe(
      tap((results) => {
        results.sort(
          (a, b) =>
            new Date(b.timestamp.seconds).getTime() -
            new Date(a.timestamp.seconds).getTime()
        );
      })
    ) as Observable<Blog[]>;

    this.subscription = this.blogPosts.subscribe(
      (result) => (this.totalPosts = result.length)
    );

    this.page = this.sanitize(
      parseInt(this.route.snapshot.queryParamMap.get('page') as string)
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  pageChange(direction: 'backward' | 'forward') {
    if (direction === 'backward') {
      this.page -= 1;
    } else {
      this.page += 1;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.page },
    });
  }

  sanitize(num: number) {
    if (isNaN(num)) {
      return 1;
    }
    return num;
  }
}
