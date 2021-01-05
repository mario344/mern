//Importamos el decorador Injectable, para inyectar clases de dependencias en los componentes
import { Injectable } from '@angular/core';

//Este módulo es para conectarnos a cualquier API con peticiones HTTP
import { HttpClient } from '@angular/common/http';

// Importamos la ruta global de la API
import { Ruta } from '../config';

//Definimos el decorador injectable
@Injectable({
  providedIn: 'root'
})

export class SlideshowService {

	public url: string;

  	constructor(private http: HttpClient) {

  		this.url = Ruta.url;

   	}

   	getSlideshow(){

   		return this.http.get(`${this.url}/mostrar-slide`);

   	}
   	
}
