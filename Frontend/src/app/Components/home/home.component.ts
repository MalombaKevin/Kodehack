import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TitleColorDirective } from 'src/app/Directives/title-color.directive';
import { TruncatePipePipe } from 'src/app/Pipes/truncate-pipe.pipe';
import { AuthService } from 'src/app/Services/auth.service';
import { QuestionsService } from 'src/app/Services/questions.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TitleColorDirective, TruncatePipePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  questionss: any[] | undefined

  constructor (public auth:AuthService, public questions:QuestionsService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.questions.getAllQuestions().subscribe((questions) => {
      this.questionss = questions;
    });

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //    this.questions.getAllQuestions()
  // }



 
}

