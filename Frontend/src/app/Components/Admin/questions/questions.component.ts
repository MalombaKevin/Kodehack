import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { QuestionsService } from 'src/app/Services/questions.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  constructor (public auth:AuthService, public questions:QuestionsService) { }
 
  ngOnInit(): void {
    this.questions.getUserQuestion()

  }
}
