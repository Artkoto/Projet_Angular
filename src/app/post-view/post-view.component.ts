//component pour l'affichage de la liste de films
import { Component, OnInit } from '@angular/core';
import{PostService} from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  filtre : string = '';
  posts : any =[] ;
  constructor(private postService : PostService){
  }

  ngOnInit(){
    this.postService.getMovie(this.filtre);
    this.posts = this.postService.posts ;
  }

  //filtre et MAJ de la liste
  filter(){
    this.postService.filter(this.filtre);
    this.postService.getMovie(this.filtre);
    this.posts = this.postService.posts ;
  }




}
