import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Interface/User/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] | undefined;
  questions: any[] | undefined;

  constructor(private user:UsersService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(users => {
      this.users = users;
    });

    this.user.getQuestions().subscribe(questions => {
      this.questions = questions
    });
  }
}




