//component pour l'affichage des détails d'un filme
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../services/post.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  titre : string = 'post';
  description: string = 'description';
  lickes : number = 0 ;
  creaatedAt : Date = new Date() ;
  miniature : string = '' ;
  afficheBack : string ='';

  constructor(private postservice:PostService ,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.titre = this.postservice.getPostById(+id).title;
    this.description = this.postservice.getPostById(+id).content;
    this.lickes = this.postservice.getPostById(+id).loves;
    this.creaatedAt = this.postservice.getPostById(+id).date;
    this.miniature = this.postservice.getPostById(+id).miniature;
    this.afficheBack = this.postservice.getPostById(+id).bg;

  }

}
