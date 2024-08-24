import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, ActivatedRoute } from "@angular/router";
import { DialogoConfirmacaoComponent } from "../../../_shared/dialogo-confirmacao/dialogo-confirmacao.component";
import { Item } from "../../item.model";
import { ItemService } from "../../item.service";


@Component({
  selector: "app-item-cadastrar-editar",
  templateUrl: "./item-cadastrar-editar.component.html",
  styleUrls: ['./item-cadastrar-editar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ItemCadastrarEditarComponent implements OnInit {
  formGroup!: UntypedFormGroup;
  item: Item | null = null;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog,
    public matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data["item"] || null;

    this.formGroup = this.formBuilder.group({
      id: [this.item ? this.item.id : null],
      nome: [this.item ? this.item.nome : "", Validators.required],
    });
  }

  salvar() {
    if (this.item && this.item.id) {
      this.itemService.atualizar(this.formGroup.value).subscribe({
        next: () => {
          this.matSnackBar.open("Atualizado com sucesso!", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });
          this.router.navigateByUrl("/itens");
        },
        error: () => {
          this.matSnackBar.open("Erro ao atualizar", '', {
            duration: 5000,
            panelClass: "red-snackbar",
          });
        },
      });
    } else {
      this.itemService.cadastrar(this.formGroup.value).subscribe({
        next: () => {
          this.matSnackBar.open("Cadastrado com sucesso!", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });
          this.router.navigateByUrl("/itens");
        },
        error: () => {
          this.matSnackBar.open("Erro ao cadastrar", '', {
            duration: 5000,
            panelClass: "red-snackbar",
          });
        },
      });
    }
  }

  deletar() {
    const dialogoReferencia = this.matDialog.open(DialogoConfirmacaoComponent);

    dialogoReferencia.afterClosed().subscribe((valorResposta) => {
      if (valorResposta) {
        if (this.item) {
          this.itemService.deletar(this.item).subscribe({
            next: () => {
              this.matSnackBar.open("Item deletado com sucesso!", '', {
                duration: 5000,
                panelClass: "green-snackbar",
              });
              this.router.navigateByUrl("/itens");
            },
            error: () => {
              this.matSnackBar.open("Erro ao deletar", '', {
                duration: 5000,
                panelClass: "red-snackbar",
              });
            },
          });
        }
      }
    });
  }
}

