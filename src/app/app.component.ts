import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false ;
  appareils = [
    {
      name : "Télévision",
      status : "éteint"
    },
    {
      name : "Macchine à laver",
    status : "allumé"
  },
  {
    name : "Ordinateur",
    status : "éteint"
  }
  ];

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true ;
      }, 4000 
    );
  }
  onAllumer(){
    console.log('On allume tout');
  }
}
