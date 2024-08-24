import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialogo-confirmacao',
  templateUrl: './dialogo-confirmacao.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class DialogoConfirmacaoComponent { }
