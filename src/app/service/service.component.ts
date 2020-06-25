import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() serviceName:string;
  @Input() serviceStatus:string;
  constructor() { }

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
    else if(this.serviceStatus === 'Non-Annulé')
    {
      return 'black';
    }
  }
}
