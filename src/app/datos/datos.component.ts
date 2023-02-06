import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {

  public nombre: string;
  public sexo: string;
  public altura: number;
  public peso: number;
  public imc: number;

  constructor(){
    this.nombre = "";
    this.sexo = "";
    this.altura = 0;
    this.peso = 0;
    this.imc = 0;
  }

  onSubmit() {
  }

  calcularImc() {
    this.imc = this.peso / ((this.altura / 100) * (this.altura / 100));
  }
}
