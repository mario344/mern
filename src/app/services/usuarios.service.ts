import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importamos la ruta global de la API
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  	public url : string;

  	constructor(private http: HttpClient) {

  		this.url = Ruta.url;

   	}

   	/*=============================================
   	PETICIÓN DE TIPO POST EN ANGULAR
   	=============================================*/

   	guardarUsuario(listaUsuario){

   		const headers = new HttpHeaders();

   		return this.http.post(`${this.url}/crear-usuario`, listaUsuario, {headers});

   	}

   	/*=============================================
   	LOGIN ANGULAR Y NODEJS
   	=============================================*/

   	loginUsuario(listaUsuario){

   		const headers = new HttpHeaders();

   		return this.http.post(`${this.url}/login-usuario`, listaUsuario, {headers});

   	}

   	

}
