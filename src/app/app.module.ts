import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Opcion1Component } from './opcion1/opcion1.component';
import { Opcion2Component } from './opcion2/opcion2.component';
import { Opcion3Component } from './opcion3/opcion3.component';
import { Opcion4Component } from './opcion4/opcion4.component';
import { Opcion5Component } from './opcion5/opcion5.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Opcion1Component,
    Opcion2Component,
    Opcion3Component,
    Opcion4Component,
    Opcion5Component,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
