import { Routes } from '@angular/router';

import { PessoaFormComponent } from './containers/pessoa-form/pessoa-form.component';
import { PessoasComponent } from './containers/pessoas/pessoas.component';
import { PessoaResolver } from './guards/pessoa.resolver';

export const PESSOAS_ROUTES: Routes = [
  { path: '', component: PessoasComponent },
  { path: 'new', component: PessoaFormComponent, resolve: { pessoa: PessoaResolver } },
  { path: 'edit/:id', component: PessoaFormComponent, resolve: { pessoa: PessoaResolver } }
];
