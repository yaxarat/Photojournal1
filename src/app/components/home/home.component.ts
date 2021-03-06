import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
    this.sortByDueDate();
  }

  sortByDueDate(): void {
    this.posts.sort((a: Post, b: Post) => {
      const aDate = new Date(a.timestamp);
      const bDate = new Date(b.timestamp);
      return aDate.getTime() - bDate.getTime();

    });
  }

}
