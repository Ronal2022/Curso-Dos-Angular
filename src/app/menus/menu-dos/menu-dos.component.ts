import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dos',
  templateUrl: './menu-dos.component.html',
  styleUrls: ['./menu-dos.component.css']
})
export class MenuDosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar() {
    this.router.navigate([('menuTres')]);
  }

  navegarUno(){
    this.router.navigate([('menuUno')]);
  }

}
