import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router) {

  }

  transferir() {
    console.log('Solicitada nova transferencia');
    const transferencia: Transferencia = {valor: this.valor, destino: this.destino};

    console.log(transferencia);

    this.service.adicionar(transferencia)
    .subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '0';
  }
}
