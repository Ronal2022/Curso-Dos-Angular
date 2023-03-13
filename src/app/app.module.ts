import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MenuUnoComponent } from './menus/menu-uno/menu-uno.component';
import { MenuDosComponent } from './menus/menu-dos/menu-dos.component';
import { MenuTresComponent } from './menus/menu-tres/menu-tres.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuUnoComponent,
    MenuDosComponent,
    MenuTresComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
