import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  transferencias: any[];

  constructor(private service: TransferenciaService) {
    this.transferencias = this.service.transferencias;
  }
}
