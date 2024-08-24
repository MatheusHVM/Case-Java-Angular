import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {
        path: "itens",
        loadChildren: () => import('./item/item-listar/item-listar.module').then(modulo => modulo.ItemListarModule)
    },
    {
        path: "itens/cadastrar",
        loadChildren: () => import('./item/item-cadastrar-editar/item-cadastrar-editar.module').then(modulo => modulo.ItemCadastrarEditarModule)
    },
    {
        path: "itens/editar/:id",
        loadChildren: () => import('./item/item-listar/item-listar.module').then(modulo => modulo.ItemListarModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
