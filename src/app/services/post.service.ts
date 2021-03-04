import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostService {
  posts : any =[] ;

  constructor(private http:HttpClient){
  }

  //recupérer les films via api avec requette http
  getMovie(txt : string)  {
    this.posts = [];
    const fitre = (txt.trim()!='')?txt:'a';
     this.http.get('https://api.themoviedb.org/4/search/movie?api_key=3dccbe5a12ae070c80aa0ddcff77a1ea&query='+fitre+'&language=fr').subscribe((data) => {
     console.log(data);
       data.results.forEach(((e : any)  => {
         if(e.title!=null && e.overview!=null && e.overview!='')
        this.posts.push({
          id : e.id,
          title : e.title,
          content : e.overview ,
          loves : e.vote_average,
          date : e.release_date,
          miniature : (e.poster_path != null)?'https://image.tmdb.org/t/p/w500'+e.poster_path: 'https://fr.web.img4.acsta.net/pictures/18/03/09/17/10/0318945.jpg',
          bg : (e.backdrop_path !=null)?'https://image.tmdb.org/t/p/w500'+e.backdrop_path: 'https://couverbook.files.wordpress.com/2013/06/photo-couverture-facebook2.jpg',
        })
       }));
     },
    );
  }

  //filtre pour la recherche de film
      filter(filtre : string){
        return filtre;
      }

      //selection d'un film
      getPostById(id : number){
        const post = this.posts.find(
          (s:any)=> {
            return s.id === id
          }
        ) ;
        return post ;
      }
}