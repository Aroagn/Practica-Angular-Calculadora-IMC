import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {

  public mensaje: string;

  constructor(){
    this.mensaje = 'Práctica Aroa Gil Núñez';
  }

  @Output() titulo = new EventEmitter<string>();

  onTitulo() {
    this.titulo.emit(this.mensaje);
  }
}
