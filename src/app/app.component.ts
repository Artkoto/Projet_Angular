import { Component } from '@angular/core';
import { promise } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false ;
  lastUpdate = new Promise(
      (resolve , reject) =>{
        const date = new Date();
        setTimeout(
          ()=> {
            resolve (date); 

          },
          4000
        )
      }
  );
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
