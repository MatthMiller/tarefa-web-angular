import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css'],
})
export class ApoliceSeguroComponent {
  nome: string;
  sexo: string = 'masculino';
  idade: number;
  valorAutomovel: number;
  valorApolice: number | null = null;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.valorAutomovel * 0.1;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}
