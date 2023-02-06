import { Component, Input, Output } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.scss']
})

export class CalcularComponent {

  @Input() nom: string;
  @Input() sex: string;
  @Input() alt: number;
  @Input() pes: number;
  @Input() imc: number;

  constructor() {
    this.nom = "";
    this.sex = "";
    this.alt = 0;
    this.pes = 0;
    this.imc = 0;
  }
}
