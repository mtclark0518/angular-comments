import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';


import { CommentService } from './services/comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    AddCommentFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
