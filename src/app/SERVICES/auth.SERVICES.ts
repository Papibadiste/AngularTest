import { Injectable } from "@angular/core";
@Injectable()
export class AuthSERVICES {
  isAuth = false;

  signIn() {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        
        resolve(true);
      }, 1000);
    });
  }
  signOut(){
      this.isAuth = false;
     
  }

}
