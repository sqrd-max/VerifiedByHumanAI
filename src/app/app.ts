import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShellMainComponent} from './pages/shell-main/shell-main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShellMainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('VerifiedByHumanAI');
}
