import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginSuccess,LoginUser, Message, RegisterUser } from '../Interface/User/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  registerUser(user: RegisterUser): Observable<Message> {    
    return this.http.post<Message>('http://localhost:5000/kodehack/auth/register',user)
  }

  loginUser(user:LoginUser): Observable<LoginSuccess> {    
    return this.http.post<LoginSuccess>('http://localhost:5000/kodehack/auth/login',user)
  }


}
