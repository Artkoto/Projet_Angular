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
  @Input() id : number = 0 ;
  @Input() miniature : string = '' ;
  @Input() afficheBack : string ='';


  constructor() {
  
  }

  like(){    
    if (!this.isLike) {
      this.isLike = true ;
    } else {
      this.isLike = false ;
    }    
  }

  ngOnInit(): void {
  }

}
