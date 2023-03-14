import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleColorDirective } from 'src/app/Directives/title-color.directive';
import { TruncatePipePipe } from 'src/app/Pipes/truncate-pipe.pipe';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TitleColorDirective, TruncatePipePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deleniti nam, eum minima atque tempore maiores. Soluta nisi rerum iusto.'

}
