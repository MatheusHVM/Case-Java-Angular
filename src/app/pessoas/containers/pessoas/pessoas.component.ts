import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { PessoasListComponent } from '../../components/pessoas-list/pessoas-list.component';
import { Pessoa } from './../../model/pessoa';
import { PessoaPage } from './../../model/pessoa-page';
import { PessoasService } from './../../services/pessoas.service';

@Component({
    selector: 'app-pessoas',
    templateUrl: './pessoas.component.html',
    styleUrls: ['./pessoas.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatToolbarModule, PessoasListComponent, MatPaginatorModule, MatProgressSpinnerModule, AsyncPipe]
})
export class PessoasComponent implements OnInit {

  pessoas$: Observable<PessoaPage> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageIndex = 0;
  pageSize = 10;

  constructor(
    private pessoasService: PessoasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh(pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }) {
    this.pessoas$ = this.pessoasService.list(pageEvent.pageIndex, pageEvent.pageSize)
      .pipe(
        tap(() => {
          this.pageIndex = pageEvent.pageIndex;
          this.pageSize = pageEvent.pageSize;
        }),
        catchError(error => {
          this.onError('Erro ao carregar pessoas.');
          return of({ pessoas: [], totalElements: 0, totalPages: 0 })
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(pessoa: Pessoa) {
    this.router.navigate(['edit', pessoa._id], { relativeTo: this.route });
  }

  onRemove(pessoa: Pessoa) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover essa pessoa?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.pessoasService.remove(pessoa._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Pessoa removida com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover pessoa.')
        );
      }
    });
  }

}
