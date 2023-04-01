import { Injectable } from '@angular/core';
import {collection, collectionData, CollectionReference, Firestore} from '@angular/fire/firestore';
import {Blog} from "../pages/blog/blog";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  constructor(private store: Firestore) {}
  getBlogs(): BehaviorSubject<Blog[]> {
    const blogCollection: CollectionReference<Blog> = collection(this.store, 'blog') as CollectionReference<Blog>;
    const blogPosts = new BehaviorSubject<Blog[]>([]);

    // noinspection JSIgnoredPromiseFromCall
    collectionData(blogCollection, { idField: 'id'}).forEach((blogPost) => {
      blogPosts.next(blogPost);
    })

    return blogPosts;
  }
}
