import { Component } from '@angular/core';
import {MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-hero',
    imports: [
        MatCardContent
    ],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss'
})
export class HeroComponent {

}
