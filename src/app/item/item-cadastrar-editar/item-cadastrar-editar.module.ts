import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class ItemCadastrarEditarModule { }


