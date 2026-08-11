import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/start/start').then((m) => m.Start),
  },
  {
    path: 'protokoll',
    loadComponent: () => import('./pages/protokoll/protokoll').then((m) => m.Protokoll),
  },
  {
    path: 'auswertung',
    loadComponent: () => import('./pages/auswertung/auswertung').then((m) => m.Auswertung),
  },
];
