import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-expertise',
  imports: [
    MatButton,
    MatCard,
    MatCardContent
  ],
  templateUrl: './expertise-component.html',
  styleUrl: './expertise-component.scss'
})
export class ExpertiseComponent {

}
