import { Component, OnInit } from '@angular/core';
import { ListaGasolinerasResponse } from '../../models/gasolinera-response.interfaces';

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrl: './lista-gasolineras.component.css'
})
export class ListaGasolinerasComponent implements OnInit {


  gasolinera: ListaGasolinerasResponse

  constructor() { }

  ngOnInit(): void {    
  }



}
