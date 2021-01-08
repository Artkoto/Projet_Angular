export class AuthService {
    isAuth = false ;

    singIn(){
        return new Promise(
                (resolve,reject) => {
                    setTimeout(
                        ()=>{
                            this.isAuth = true ;
                            resolve(true);
                        }, 4000
                    ); 
                }
            );
    }

    singOut(){
        this.isAuth = false ;
    }
}