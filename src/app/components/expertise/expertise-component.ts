import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';



@Component({
  selector: 'app-expertise',
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
  ],
  templateUrl: './expertise-component.html',
  styleUrl: './expertise-component.scss'
})
export class ExpertiseComponent {




  constructor() { }
}
