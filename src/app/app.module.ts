import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { Partie3Component } from './partie3/partie3.component';
import { Partie4Component } from './partie4/partie4.component';
import { Partie5Component } from './partie5/partie5.component';
import { Partie6Component } from './partie6/partie6.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    Partie3Component,
    Partie4Component,
    Partie5Component,
    Partie6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
