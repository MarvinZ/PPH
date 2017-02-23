import { Component, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
 import { CommentService } from './../services/commentX.service';
 import { CommentX } from './../models/commentX'
 import {Observable} from 'rxjs/Rx';
 import { EmitterService } from './../services/emitter.service';

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit {
      comments: CommentX[];


  constructor( private commentService: CommentService) { }

   loadComments(){
        // Get all comments
         this.commentService.getComments()
                           .subscribe(
                               comments => this.comments = comments, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

  ngOnInit() {
     this.loadComments()
    console.log('okkkk!');
  }

  private model = new CommentX(new Date(), '', '');
    public modelito = new CommentX(new Date(), 'marvZ', 'hardcoded because I love hardcoding!');

    private editing = false;
    
    // Input properties
     @Input() editId: string;
     @Input() listId: string;
     

    submitComment(){
        // Variable to hold a reference of addComment/updateComment
        let commentOperation:Observable<CommentX[]>;

        // if(!this.editing){
        //     // Create a new comment
        //     commentOperation = this.commentService.addComment(this.model)
        // } else {
        //     // Update an existing comment
        //      commentOperation = this.commentService.updateComment(this.model)
        // }

        this.commentService.addComment(this.model);

        // Subscribe to observable
        commentOperation.subscribe(
                                comments => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(comments);
                                    // Empty model
                                   // this.model = new CommentX(new Date(), '', '');
                                    // Switch editing status
                                  //  if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log('Error: ' + err);
                                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((comment:CommentX) => {
            this.model = comment
            this.editing = true;
        });
    }

    demeDuro () {
             // let commentOperation:Observable<CommentX[]>;
              this.commentService.addComment(this.modelito).subscribe(
                                comments => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(comments);
                                    // Empty model
                                    this.model = new CommentX(new Date(), '', '');
                                    // Switch editing status
                                    if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });

     this.loadComments();

      alert('ayyyy');
    }

}

