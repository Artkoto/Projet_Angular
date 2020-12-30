import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title : 'Premier post',
      content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta eum officia ad reprehenderit similique, vel ea accusantium, tempora veritatis dolore nisi quasi? Quod nesciunt minima quasi maxime repudiandae temporibus!' ,
      loves : 2,
      date : new Date(),
      isLike : false,
      isDisLike : false
    },
    {
      title : 'Deuxieme post',
      content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta eum officia ad reprehenderit similique, vel ea accusantium, tempora veritatis dolore nisi quasi? Quod nesciunt minima quasi maxime repudiandae temporibus!' ,
      loves : 2,
      date : new Date(),
      isLike : false,
      isDisLike : false
    },
    {
      title : 'Encore un autre post',
      content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta eum officia ad reprehenderit similique, vel ea accusantium, tempora veritatis dolore nisi quasi? Quod nesciunt minima quasi maxime repudiandae temporibus!' ,
      loves : 2,
      date : new Date(),
      isLike : false,
      isDisLike : false
    }
  ];
  constructor(){
  }
}
