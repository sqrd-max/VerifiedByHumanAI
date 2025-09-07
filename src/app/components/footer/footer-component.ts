import {Component, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

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
    MatError,
    RouterLink
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent {

  currentYear = signal(new Date().getFullYear());
  isSubmitting = signal(false);

  // Form control with validation
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() {
    // Update year annually if component stays mounted
    setInterval(() => {
      this.currentYear.set(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24 * 30); // Check monthly
  }

  async subscribe(): Promise<void> {
    if (this.email.invalid) {
      this.email.markAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Handle successful subscription
      console.log('Subscription successful:', this.email.value);
      this.email.reset();

      // You could add a success message or toast here
    } catch (error) {
      console.error('Subscription failed:', error);
      // Handle error - show toast, etc.
    } finally {
      this.isSubmitting.set(false);
    }
  }

  onSearchClick(): void {
    // Handle search button click
    console.log('Search clicked');
    // Implement search functionality
  }
}
