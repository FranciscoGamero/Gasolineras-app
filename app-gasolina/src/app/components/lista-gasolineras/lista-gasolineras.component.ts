import { Component, Input, input, OnInit } from '@angular/core';
import { Gasolinera} from '../../models/gasolinera-response.interfaces';
import { GasolineraService } from '../../services/gasolinera.service';

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css']
})
export class ListaGasolinerasComponent{
 
  listadoGasolineras: Gasolinera[] = [];
  gasolinerasFiltradas: Gasolinera[] = [];

  

  constructor(private gasolineraService :GasolineraService) {}

  ngOnInit() {
    this.gasolineraService.getGasList().subscribe((respuesta) => {
  
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
      try {

        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras);
        this.gasolinerasFiltradas = this.listadoGasolineras;
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }

  private cleanProperties(arrayGasolineras: any) {
    let newArray: Gasolinera[] = [];
    arrayGasolineras.forEach((gasolineraChusquera: any) => {
      const gasolineraConNombresGuenos: any = {};

 
      let gasolinera = new Gasolinera(
        gasolineraChusquera['IDEESS'],
        gasolineraChusquera['Rótulo'],
        gasolineraChusquera['Precio Gasolina 95 E5'],
        gasolineraChusquera['Precio Gasoleo A'],
        gasolineraChusquera['C.P.'],
        gasolineraChusquera['Dirección'],
        gasolineraChusquera['Localidad'],
        gasolineraChusquera['Provincia'],
        gasolineraChusquera['Latitud'],
        gasolineraChusquera['Longitud'],
        gasolineraChusquera['Horario'],
        gasolineraChusquera['Remisión'],
        gasolineraChusquera['Precio Biodiesel'],
        gasolineraChusquera['Precio Gasolina 98 E5'],
        gasolineraChusquera['Precio Hidrogeno'],
        gasolineraChusquera['Precio Gasoleo B']
      );

      newArray.push(gasolinera);
    });
    return newArray;
  }


  filterByFuel(fuel: string) {
    if (fuel === '95') {
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return gasolinera.price95 !== null;
      });
    } else if (fuel === 'gasoleoA') {
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return gasolinera.priceGasoleoA !== null;
      });
    }else if (fuel === 'biodiesel') {
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return gasolinera.priceBiodiesel !== null;
      });
    }else if(fuel === '98'){
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return gasolinera.priceGasolina98 !== null;
      });
    }else if(fuel === 'hidrogeno'){
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return gasolinera.priceHidrogeno !== null;
      });
    }else if(fuel === 'gasoleoB'){
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return gasolinera.priceGasoleoB !== null;
      });
    }
  }
} 
