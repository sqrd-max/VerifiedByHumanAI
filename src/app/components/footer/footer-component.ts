import {Component, signal} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [
    MatButton,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent {

  email = new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] });

  readonly year = signal<number>(new Date().getFullYear());

  subscribe(): void {
    if (this.email.invalid) {
      this.email.markAsTouched();
      return;
    }
    // TODO: Replace with your actual subscription logic
    console.log('[footer] subscribe:', this.email.value);
    this.email.reset('');
  }
}
