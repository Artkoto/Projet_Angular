import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle : string ='';
  @Input() postContent : string ='' ;
  @Input() postLoversIts : number = 0 ;
  @Input() postCreaatedAt : Date = new Date() ;
  @Input() isLike : boolean = false ;
  @Input() isDisLike : boolean = false ;
  @Input() id : number = 0 ;


  constructor() {
  
  }

  like(){
    this.postLoversIts += 1 ;
    this.isLike = true ;
    this.isDisLike = false;
  }
  dislike(){
     
    if(this.isLike){
      this.postLoversIts -= 1 ;
      this.isLike = false ;
    }
    this.isDisLike = true;
  }

  reset(){
    if(this.isLike){
      this.postLoversIts -= 1 ;
    }
    this.isLike = false ;
    this.isDisLike = false;

  }

  ngOnInit(): void {
  }

}
