import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/Services/auth.service';
import { QuestionsService } from 'src/app/Services/questions.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  users: any[] | undefined;
  questions: any[] | undefined
  questionCount!: number;


  constructor (public auth:AuthService, public question:QuestionsService, private user:UsersService) { }
 
  ngOnInit(): void {
   

    this.user.getUsers().subscribe(users => {
      this.users = users;
    });
    this.question.getAllQuestions().subscribe((questions) => {
      this.questions = questions;
      this.questionCount = this.questions.length;
    });

  }


}
