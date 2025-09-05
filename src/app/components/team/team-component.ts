import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-team',
  imports: [
    MatButton,
    MatIconModule,
  ],
  templateUrl: './team-component.html',
  styleUrl: './team-component.scss'
})
export class TeamComponent {

}
