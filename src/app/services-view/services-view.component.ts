import { Component, OnInit } from '@angular/core';
import { serviceSERVICES } from '../SERVICES/service.SERVICES';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  styleUrls: ['./services-view.component.scss']
})
export class ServicesViewComponent implements OnInit {

  isAuth = false ;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      )
    }
  );

 services: any [];
 servicesSubcription: Subscription;


  constructor(private serviceSERVICES: serviceSERVICES) {
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
    
  }

  ngOnInit(){
    this.servicesSubcription = this.serviceSERVICES.servicesSubject.subscribe(
      (services:any[]) => {
        this.services = services
      }
    );
    this.serviceSERVICES.emitServicesSubject();
  }

  onAllumer(){
    this.serviceSERVICES.switchOnAll();
  }
  onAnnuler(){
    this.serviceSERVICES.switchOffAll();
  }
  swapAll(){
    this.serviceSERVICES.switchAll();
  }

}
