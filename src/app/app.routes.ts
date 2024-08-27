import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pessoas' },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.routes').then(m => m.PESSOAS_ROUTES)
  }
];
