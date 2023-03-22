import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  form!:FormGroup

  constructor(public AuthService:AuthService, private authentication:AuthenticationService, private router:Router){}

  ngOnInit(): void {

    this.form = new FormGroup({
      username:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required]),      
    })
    
  }

 

  submitForm(){   
    this.authentication.registerUser(this.form.value).subscribe(response=>{

      this.router.navigate(['home'])
      
    })

  }
  
  

}
