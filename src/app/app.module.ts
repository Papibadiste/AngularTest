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
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './SERVICES/auth-guard.SERVICES';



const appRoutes: Routes = [
  
  { path: 'services/:id',canActivate: [AuthGuard], component: SingleServicesComponent},
  { path: '',canActivate: [AuthGuard], component:AuthComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'not-found', component: Page404Component},
  { path: 'services', canActivate: [AuthGuard], component: ServicesViewComponent},
 
  { path: '**', redirectTo: '/not-found'}
];
  


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AuthComponent,
    ServicesViewComponent,
    SingleServicesComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    serviceSERVICES,
    AuthSERVICES,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
