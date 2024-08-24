import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../../item.service';
import { Item } from '../../item.model';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-item-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSpinner,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {
  page: any;
  carregando: any;
  itens$: Observable<Item[]> | undefined;
  colunasTabela = ['id', 'nome'];
  formGroupPesquisa: any;

  sortEvent: Sort | undefined;
  pageEvent: PageEvent | undefined;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.listarItens();
  }

  listarItens() {
    this.itens$ = this.itemService.listar();
  }

  limparPesquisa() {
    this.formGroupPesquisa.reset();
    this.listarItens();
  }
}
