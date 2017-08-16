import { Component } from '@angular/core';
export class Comment {
    author: string;
    message: string;
}
    const comments: Comment[] = [
    {author: "tyler", message: "i am dumb"},
    {author: "jon", message:"i am less dumb"},
    {author:"seth", message:"i like turtles"}
  ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
comments: Comment[];

  addComment(author, message) {
    const newComment = new Comment();
    newComment.author = author;
    newComment.message = message;
    this.comments.push(newComment);
  }
  deleteComment(index) {
    console.log(index);
    this.comments.splice(index, 1);
  }
  editComment(index) {

    const target = this.comments[index];
    console.log(target);
    console.log(this);
  }

}
  // deleteComment() {

  // }


