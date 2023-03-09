import { Component, OnInit } from '@angular/core';

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
	comentarios: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviarInformacion(): void {
    if (this.nombre.trim() === '' || this.apellido.trim() === '' || this.correo.trim() === '') {
      console.log('Información enviada:', this.nombre, this.apellido, this.correo);
    }
  }

}
