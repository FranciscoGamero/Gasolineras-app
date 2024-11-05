import { Component, Input, input, OnInit } from '@angular/core';
import { GasolineraService } from '../../services/gasolinera.service';
import { GasolineraResponse, ListaGasolinerasResponse } from '../../models/gasolinera-response.interfaces';

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css']
})
export class ListaGasolinerasComponent {
  precioMinimo = 0;
  precioMaximo = 10;
}

