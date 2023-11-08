import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css'],
})
export class CalcularMediaComponent {
  ac1;
  ac2;
  ag;
  af;
  media = null;
  resultado = null;

  calcularMedia() {
    this.media =
      this.ac1 * 0.15 + this.ac2 * 0.3 + this.ag * 0.1 + this.af * 0.45;

    if (this.media >= 5) {
      this.resultado = 'Aprovado';
    } else {
      this.resultado = 'Reprovado';
    }
  }
}
