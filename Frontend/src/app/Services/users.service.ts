import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interface/User/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  getUsers(): Observable<User[]> { 
    return this.http.get<User[]>('http://localhost:5000/kodehack/users');
  }

  getQuestions(): Observable<User[]> { 
    return this.http.get<User[]>('http://localhost:5000/kodehack/questions');
  }
  
}
