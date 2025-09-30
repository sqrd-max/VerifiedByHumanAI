import { Component } from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
  selector: 'app-markdown-sample',
  imports: [MarkdownComponent,],
  templateUrl: './markdown-sample.html',
  styleUrl: './markdown-sample.css'
})
export class MarkdownSample {
  markdownPath = '/assets/test.md';
}
