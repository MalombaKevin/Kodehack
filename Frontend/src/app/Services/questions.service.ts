import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { addQuestion, Question } from '../Interface/QuestionAnswer/questionAnswer';
import { Message } from '../Interface/User/user';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  question$ = new Subject<Question[]>()

  addQuestion(question:addQuestion):Observable<Message> { 

    let params = new HttpParams() 
    params = params.set('print', 'pretty') 
    const token = localStorage.getItem('token') as string
  return this.http.post<Message>('http://localhost:5000/kodehack/question',question,{ 
 
  headers : new HttpHeaders({ 
    token : token
  }) ,
  params,
  responseType: 'json',
  } ) 
    
    
  }

  getAllQuestions(){ 
    const token = localStorage.getItem('token') as string
    this.http.get<Question[]>('http://localhost:5000/kodehack/question', { 
 
    headers : new HttpHeaders({ 
      token : token
    })
  
    }).subscribe(response=>{
     this.question$.next(response)
    })
    
  }

  getUserQuestion(){ 
    
    
  }



}
