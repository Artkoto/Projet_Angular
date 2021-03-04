//authentification (utilisation de Promise pour le traitement asynchrone des données)
export class AuthService {
    isAuth = false ;

    singIn(){
        return new Promise(
                (resolve,reject) => {
                    setTimeout(
                        ()=>{
                            this.isAuth = true ;
                            resolve(true);
                        }, 1000
                    ); 
                }
            );
    }

    singOut(){
        this.isAuth = false ;
    }
}