import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, // Import the PrimeNG Card module
    ButtonModule, // Add ButtonModule here


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
