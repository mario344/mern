import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Importamos la ruta global de la API
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  	public url: string;

  	constructor(private http: HttpClient) {

  		this.url = Ruta.url;

   	}

   	getGaleria(){

   		return this.http.get(`${this.url}/mostrar-galeria`);

   	}
}
