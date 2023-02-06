import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.scss']
})

export class CalcularComponent {

  @Input() nombre: string;
  @Input() sexo: string;
  @Input() altura: number;
  @Input() peso: number;
  @Input() imc: number;

  constructor() {
    this.nombre = "";
    this.sexo = "";
    this.altura = 0;
    this.peso = 0;
    this.imc = 0;
  }
}
