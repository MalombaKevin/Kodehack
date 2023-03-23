import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form!:FormGroup

  constructor(public AuthService:AuthService, private authentication:AuthenticationService, private router:Router){}
  ngOnInit(): void {

    this.form = new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required]),      
    })
    
  }

 

  submitForm(){   
   this.authentication.loginUser(this.form.value).subscribe(response=>{
    this.AuthService.setName(response.username)
    this.AuthService.setEmail(response.email)
    // this.AuthService.setRole(response.is_admin)
    this.AuthService.login() 
    localStorage.setItem('token', response.token) 
    const token = localStorage.getItem('token') as string 
    if(token) 
    {
      this.router.navigate(['/home'])

    }

    console.log(response.token);
    
    
   },
   () =>{
    this.router.navigate(['/'])
    this.AuthService.logout() 
  }
   )
    
  }
  

}