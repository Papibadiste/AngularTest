import { Component, OnInit } from '@angular/core';
import { serviceSERVICES } from '../SERVICES/service.SERVICES';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-services',
  templateUrl: './single-services.component.html',
  styleUrls: ['./single-services.component.scss']
})
export class SingleServicesComponent implements OnInit {

  name:string = 'service';
  status:string = 'status';
  description:string = 'description';
  temps:string = 'temps';
  constructor(private serviceSERVICES: serviceSERVICES,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.name = this.serviceSERVICES.getServicesByID(+id).name
    this.status = this.serviceSERVICES.getServicesByID(+id).status
    this.description = this.serviceSERVICES.getServicesByID(+id).description
    this.temps = this.serviceSERVICES.getServicesByID(+id).temps
  }

}
