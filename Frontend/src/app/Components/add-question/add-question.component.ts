import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

@ViewChild('form')form!:NgForm 

  submitForm(){   
  console.log(this.form);
  this.form.reset()   
  }

}
