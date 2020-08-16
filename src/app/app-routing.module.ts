import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Opcion1Component } from './opcion1/opcion1.component';
import { Opcion2Component } from './opcion2/opcion2.component';
import { Opcion3Component } from './opcion3/opcion3.component';
import { Opcion4Component } from './opcion4/opcion4.component';
import { Opcion5Component } from './opcion5/opcion5.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Navegacion', component: Opcion1Component },
  { path: 'DataBinding', component: Opcion2Component },
  { path: 'IdentificaComponentes', component: Opcion3Component },
  { path: 'Practica', component: Opcion4Component },
  { path: 'Autoevalucion', component: Opcion5Component },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
