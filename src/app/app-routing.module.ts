import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDosComponent } from './menus/menu-dos/menu-dos.component';
import { MenuTresComponent } from './menus/menu-tres/menu-tres.component';
import { MenuUnoComponent } from './menus/menu-uno/menu-uno.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent},
  { path: 'menuUno', component: MenuUnoComponent },
  { path: 'menuDos', component: MenuDosComponent },
  { path: 'menuTres', component: MenuTresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
