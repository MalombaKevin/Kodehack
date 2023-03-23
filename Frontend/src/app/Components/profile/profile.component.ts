import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruncatePipePipe } from 'src/app/Pipes/truncate-pipe.pipe';
import { any } from 'joi';
import { AuthService } from 'src/app/Services/auth.service';
import { QuestionsService } from 'src/app/Services/questions.service';
import { TitleColorDirective } from 'src/app/Directives/title-color.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipePipe, TitleColorDirective],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus beatae inventore voluptate odio temporibus molestias nulla maxime esse iste. Sed atque eius quae blanditiis sunt totam, doloremque voluptate reiciendis? Quia itaque velit nesciunt provident cumque ratione eveniet, eligendi quae, dolorum voluptatem distinctio praesentium neque aperiam consequatur necessitatibus, eius reiciendis.'

  
  constructor (public auth:AuthService, public questions:QuestionsService) { }
 
  ngOnInit(): void {
    this.questions.getUserQuestion()

  }



}
