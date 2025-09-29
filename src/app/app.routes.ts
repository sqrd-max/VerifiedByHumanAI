
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/shell-main/shell-main').then(m => m.ShellMainComponent)
  },

  {
    path: 'team',
    loadComponent: () =>
      import('./pages/team/team-component').then(m => m.TeamComponent)
  },

  {
    path: 'md',
    loadComponent: () =>
      import('./pages/markdown-sample/markdown-sample').then(m => m.MarkdownSample)
  },

  { path: '**', redirectTo: '/home' }
];
