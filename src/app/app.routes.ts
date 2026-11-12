import { Routes } from '@angular/router';
import { auswertungGuard, protokollGuard } from './core/guards/formular-step.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/start/start').then((m) => m.Start),
  },
  {
    path: 'protokoll',
    loadComponent: () => import('./pages/protokoll/protokoll').then((m) => m.Protokoll),
    canActivate: [protokollGuard],
  },
  {
    path: 'auswertung',
    loadComponent: () => import('./pages/auswertung/auswertung').then((m) => m.Auswertung),
    canActivate: [auswertungGuard],
  },
];
