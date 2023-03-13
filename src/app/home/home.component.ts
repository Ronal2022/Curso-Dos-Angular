import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, MinValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjectEmpty:boolean = false;
  nombre: string = '';
	apellido: string = '';
	correo: string = '';
	comentario: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  // enviarInformacion(): void {
  //   if (this.nombre.trim() === '' || this.apellido.trim() === '' || this.correo.trim() === '') {
  //     console.log('Información enviada:', this.nombre, this.apellido, this.correo);
  //   }
  // }

  enviarNombre(): void {
    console.log('El nombre es: ' + this.nombre);
    console.log('El nombre es: ' + this.apellido);
    console.log('El nombre es: ' + this.correo);
    console.log('El nombre es: ' + this.comentario);
  }

}
