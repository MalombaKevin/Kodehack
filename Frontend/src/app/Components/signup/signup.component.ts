import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  form!:FormGroup
  ngOnInit(): void {

    this.form = new FormGroup({
      username:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required]),      
    })
    
  }

  submitForm(){   
   console.log(this.form);
    
  }
  

}
