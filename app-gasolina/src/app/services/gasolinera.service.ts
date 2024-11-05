import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaGasolinerasResponse } from '../models/gasolinera-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  private apiUrl = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/PreciosEESSTerrestres';

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<ListaGasolinerasResponse> {
    return this.http.get<ListaGasolinerasResponse>(this.apiUrl);
  }
}