import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { PostService } from './services/post.service';
import{AuthService} from './services/auth.service'
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

// Routage de l'application
const appRoutes : Routes = [
  {path: 'posts' , component: PostViewComponent},
  {path: 'auth' , component : AuthComponent},
  {path:'posts/:id' ,canActivate: [AuthGuard], component : SinglePostComponent},
  {path :'' , component : PostViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**' , redirectTo: 'not-found'},
  {path: 'posts/:id/**', redirectTo: 'not-found'}

  
  
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
