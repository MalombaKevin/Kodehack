import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isLoggedIn = false
  private username =''
  private email =''
  private is_admin =''


  isAdmin = false


  


  getUserName() {
     return this.username
  }

  setName(username:string) {
    this.username=username
 }

 getEmail() {
  return this.email
}


// is_admin:

setEmail(email:string) {
 this.email=email
}


getRole() {
  return this.is_admin
}

setRole(is_admin:boolean) {
 this.is_admin
}

  getAuthStatus():Promise<boolean>{

    const promise = new Promise<boolean>((resolve, reject)=>{ 
      setTimeout(()=>{
        resolve(this.isLoggedIn)
       })
    })
    return promise
   }

  login(){

    this.isLoggedIn = true
    this.router.navigate(['home'])
    
  }

  logout(){
    localStorage.clear()
    this.isLoggedIn = false
    this.router.navigate([''])
  }


}
