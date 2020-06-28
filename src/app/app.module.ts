import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { serviceSERVICES } from './SERVICES/service.SERVICES';
  


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    serviceSERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
