import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, NgForOf],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  public posts = ["1", "2", "3"];
}
