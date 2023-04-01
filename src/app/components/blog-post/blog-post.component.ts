import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  postId: string;
  constructor(private route: ActivatedRoute) {
    this.postId = ""
  }
  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.postId = this.route.snapshot.paramMap.get('id')!;
  }

}
