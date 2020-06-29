import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { serviceSERVICES } from './SERVICES/service.SERVICES';
import { AuthComponent } from './auth/auth.component';
import { ServicesViewComponent } from './services-view/services-view.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthSERVICES } from './SERVICES/auth.SERVICES';
import { SingleServicesComponent } from './single-services/single-services.component';


const appRoutes: Routes = [
  { path: 'services', component: ServicesViewComponent},
  { path: 'services/:id', component: SingleServicesComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: ServicesViewComponent}
];
  


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AuthComponent,
    ServicesViewComponent,
    SingleServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    serviceSERVICES,
    AuthSERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
