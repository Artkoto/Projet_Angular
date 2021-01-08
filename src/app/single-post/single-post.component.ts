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

  constructor(private postservice:PostService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.titre = this.postservice.getPostById(+id).title;
    this.description = this.postservice.getPostById(+id).content;

  }

}
