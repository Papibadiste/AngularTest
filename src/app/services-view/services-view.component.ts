import { Component, OnInit } from '@angular/core';
import { serviceSERVICES } from '../SERVICES/service.SERVICES';

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


  constructor(private serviceSERVICES: serviceSERVICES) {
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
    
  }

  ngOnInit(){
    this.services = this.serviceSERVICES.services;
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
