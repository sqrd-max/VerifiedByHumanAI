import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-team',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatChip,
    MatIconModule,
    MatChipSet
  ],
  templateUrl: './team-component.html',
  styleUrl: './team-component.scss'
})
export class TeamComponent {

}
