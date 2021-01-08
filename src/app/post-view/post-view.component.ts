import { Component, OnInit } from '@angular/core';
import{PostService} from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  posts : any =[] ;
  constructor(private postService : PostService){
  }

  ngOnInit(){
    this.posts = this.postService.posts ;
  }

  toutAimer(){
    this.postService.likeAll();
  }
  toutnAimer(){
    this.postService.disLikeAll();
  }
  toutInit(){
    this.postService.resetAll();
  }




}
