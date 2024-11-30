import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent {
 heart:number = 1;

 toggleHeart(){
   if(this.heart==1){
     this.heart++;
   }else{
     this.heart--;
   }
 }
}
