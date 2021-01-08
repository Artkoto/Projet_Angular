export class PostService {
    posts = [
        {
          id : 1,
          title : 'Premier post',
          content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta eum officia ad reprehenderit similique, vel ea accusantium, tempora veritatis dolore nisi quasi? Quod nesciunt minima quasi maxime repudiandae temporibus!' ,
          loves : 19,
          date : new Date(),
          isLike : false,
          isDisLike : false
        },
        {
          id  :2,
          title : 'Deuxieme post',
          content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta eum officia ad reprehenderit similique, vel ea accusantium, tempora veritatis dolore nisi quasi? Quod nesciunt minima quasi maxime repudiandae temporibus!' ,
          loves : 18,
          date : new Date(),
          isLike : false,
          isDisLike : false
        },
        {
          id : 3, 
          title : 'Encore un autre post',
          content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta eum officia ad reprehenderit similique, vel ea accusantium, tempora veritatis dolore nisi quasi? Quod nesciunt minima quasi maxime repudiandae temporibus!' ,
          loves : 356,
          date : new Date(),
          isLike : false,
          isDisLike : false
        }
      ];

      likeAll(){
        for(let post of this.posts){
          post.isDisLike = false ;
          post.isLike = true;
        }
      }

      disLikeAll(){
        for(let post of this.posts){
          post.isDisLike = true ;
          post.isLike = false ;
        }

      }

      resetAll(){
        for(let post of this.posts){
          
          post.isDisLike = false ;
          post.isLike = false ;
        }
      }

      getPostById(id : number){
        const post = this.posts.find(
          (s)=> {
            return s.id === id
          }
        ) ;
        return post ;
      }
}