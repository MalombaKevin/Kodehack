import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core'
import { addQuestion } from 'src/app/Interface/QuestionAnswer/questionAnswer';
import { QuestionsService } from 'src/app/Services/questions.service';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

@ViewChild('form')form!:NgForm 

constructor(private bug:QuestionsService, private router:Router ){
  
 }

  submitForm(){   
  // console.log(this.form);
  this.bug.addQuestion(this.form.value).subscribe(res=>{
    console.log(res);    
  }
    )
  this.form.reset()   
  this.router.navigate(['/home'])
  }

}
