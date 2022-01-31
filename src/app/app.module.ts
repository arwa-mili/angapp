import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ServicesComponent } from './services/services.component';

import { FormsModule } from '@angular/forms';
import { AboutService } from './services/about.service';
import { MeteoComponent } from './meteo/meteo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
   
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent],
})
export class AppModule { }
