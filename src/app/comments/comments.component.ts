import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment/comment.service';
import { AddCommentFormComponent } from '../add-comment-form/add-comment-form.component';
export class Comment {
  author: string;
  message: string;
}
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = []

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService
  }

}
