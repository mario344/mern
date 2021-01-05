import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { UsuariosService } from '../../services/usuarios.service';

//Esto es la clase que se necesita para navegar entre páginas
import { ActivatedRoute } from '@angular/router';

//Esto es la clase que se necesita para trabajar con formularios
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

	//VARIABLES PÚBLICAS O GLOBALES

	public articuloJson:any;
	public renderArticulo:any;
	public contenidoArticulo:any;
	public login:boolean = false;
	public usuariosJson:any;
	public renderUsuario:any;
	public validarLogin:boolean = true;
	public listaUsuario:any;
	public mensajeLogin:string;

  	constructor(activateRoute: ActivatedRoute,
  			  private articulosService: ArticulosService,
  			  private usuariosService: UsuariosService) {

	  	/*=============================================
		RECIBIENDO DATOS DINÁMICOS
		=============================================*/

		this.articulosService.getArticulos()
		.subscribe( respuesta => {

			this.articuloJson = respuesta;
			
			this.renderArticulo = this.articuloJson["data"].find(result => {

				return result.url == activateRoute.snapshot.params["id"]

			}) 

			this.contenidoArticulo = this.renderArticulo.contenido;

		})

		/*=============================================
		ONJETO LISTA USUARIO
		=============================================*/

		this.listaUsuario = {

			usuario:null,
			password:null
		}

  }

  ngOnInit(): void {
  }


	/*=============================================
	FORMULARIO LOGIN
	=============================================*/

  	onSubmit(f: NgForm){

	  	this.usuariosService.loginUsuario(this.listaUsuario)
	  	.subscribe(respuesta =>{
	  		
	  		this.usuariosJson = respuesta;

	  		if(this.usuariosJson["mensaje"] == "ok"){

	  			this.login = true;

	  		}else{

	  			this.mensajeLogin = this.usuariosJson["mensaje"];
				this.validarLogin = false;
			} 		

	  	})


  	}


}
