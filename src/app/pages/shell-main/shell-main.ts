import { Component } from '@angular/core';

import {FooterComponent} from '../../components/footer/footer-component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeroComponent} from '../../components/hero/hero-component';
import {TeamComponent} from '../../components/team/team-component';
import {ExpertiseComponent} from '../../components/expertise/expertise-component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-shell-main',
  imports: [

    FooterComponent,

    ReactiveFormsModule,
    HeroComponent,
    TeamComponent,
    ExpertiseComponent,
    HeaderComponent
  ],
  templateUrl: './shell-main.html',
  styleUrl: './shell-main.scss'
})

export class ShellMainComponent {
  contactForm!: FormGroup; // ! = definite assignment

  constructor(private fb: FormBuilder) {
    // Now it's safe to build the form because fb is initialized
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', Validators.required]
    });
  }

  // Smooth scroll helper
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  // Submit handler
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // TODO: handle submission (HTTP request, etc.)
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
