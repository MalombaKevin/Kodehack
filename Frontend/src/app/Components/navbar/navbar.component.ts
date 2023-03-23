import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  users: any[] | undefined;

 constructor(public authService:AuthService, private user:UsersService){}
  ngOnInit(): void {
    this.user.getUsers().subscribe((users) => {
      this.users = users;
      
    });
  }

 


}
