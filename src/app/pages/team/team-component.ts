import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {HeaderComponent} from '../../components/header/header.component';

interface Partner {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  portfolioLabel: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    HeaderComponent
  ],
  templateUrl:  './team-component.html',
  styleUrl: './team-component.scss',

})
export class TeamComponent {
  isScrolled = false;

  partners: Partner[] = [
    {
      name: 'Dmitry',
      role: 'Senior Data Scientist & Research Partner',
      bio: 'CERN / Jefferson Lab. Rigorous models & validation frameworks for complex analytics.',
      skills: ['PhD Physics', 'ML & Causal', 'Big Data', 'Reproducibility'],
      portfolioLabel: 'Research Portfolio'
    },
    {
      name: 'Olga',
      role: 'Financial Markets Partner, CFA',
      bio: 'Portfolio strategy & governance. Aligns quant with regulatory & fiduciary duties.',
      skills: ['CFA', 'Risk', 'PM', 'Policy'],
      portfolioLabel: 'Credentials'
    }
  ];

  services: Service[] = [
    {
      title: 'Advanced Analytics',
      description: 'Machine learning models with rigorous validation frameworks for enterprise-scale data science projects.',
      icon: 'analytics',
      features: ['ML Models', 'Validation', 'Big Data', 'Reproducibility']
    },
    {
      title: 'Financial Markets',
      description: 'Portfolio strategy, risk management, and regulatory compliance for institutional investors.',
      icon: 'trending_up',
      features: ['Portfolio Strategy', 'Risk Management', 'Compliance', 'CFA Expertise']
    },
    {
      title: 'Research & Development',
      description: 'Cutting-edge research methodologies from leading scientific institutions applied to business problems.',
      icon: 'science',
      features: ['CERN Methods', 'Scientific Rigor', 'Innovation', 'Peer Review']
    }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  scrollTo(elementId: string) {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
