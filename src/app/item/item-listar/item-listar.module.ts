import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListarRoutingModule } from './item-listar-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItemListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule, 
    MatPaginator
  ]
})
export class ItemListarModule { }
