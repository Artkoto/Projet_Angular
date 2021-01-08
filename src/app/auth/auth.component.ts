import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import{Router} from '@angular/router'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus : boolean = false ;


  constructor(private authservice : AuthService , private route: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authservice.isAuth ;
  }

  onSingIn(){
    this.authservice.singIn().then(
      () => {
        console.log('Connecté avec success');
        this.authStatus = this.authservice.isAuth;
        this.route.navigate(['posts']);
      }
    );
  }

  onSingOut(){
    this.authservice.singOut();
    this.authStatus = this.authservice.isAuth ;
  }

}
