import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './datos/datos.component';
import { CalcularComponent } from './calcular/calcular.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    CalcularComponent,
    TituloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
