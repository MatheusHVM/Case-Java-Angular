import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { Pessoa } from './../../model/pessoa';

@Component({
    selector: 'app-pessoas-list',
    templateUrl: './pessoas-list.component.html',
    styleUrls: ['./pessoas-list.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class PessoasListComponent implements OnInit {

  @Input() pessoas: Pessoa[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'name', 'cpfCnpj',  'telefone', 'email', 'endereco', 'numeroEndereco', 'bairro', 'cep', 'cidade', 'uf' ];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(pessoa: Pessoa) {
    this.edit.emit(pessoa);
  }

  onDelete(pessoa: Pessoa) {
    this.remove.emit(pessoa);
  }

}
