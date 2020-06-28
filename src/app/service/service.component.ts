import { Component, OnInit, Input } from '@angular/core';
import { serviceSERVICES } from '../SERVICES/service.SERVICES';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() serviceName:string;
  @Input() serviceStatus:string;
  @Input() indexOfService:number;
  constructor(private serviceSERVICES: serviceSERVICES) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.serviceStatus;
  }

  getColor(){
    if(this.serviceStatus === 'Annulé'){
      return 'red';
    }
    else if(this.serviceStatus === 'Non-Annulé')
    {
      return 'green';
    }
    else
    {
      return 'black';
    }
  }
  swapOne(){
    this.serviceSERVICES.switchOne(this.indexOfService);
  }
}
