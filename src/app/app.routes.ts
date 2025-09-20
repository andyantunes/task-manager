import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: 'board',
    loadComponent: () => import('./features/board/board').then((m) => m.Board),
  },
  {
    path: 'report',
    loadComponent: () => import('./features/report/report').then((m) => m.Report),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
