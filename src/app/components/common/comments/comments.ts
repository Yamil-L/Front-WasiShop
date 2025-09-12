import { Component } from '@angular/core';
import { comments } from '../../../constants/mocks/comments';
import { Comment } from '../../../interfaces/comments';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [DatePipe],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments {
  comments: Comment[];

  constructor() {
    this.comments = comments;
  }
}
