import { Injectable } from "@angular/core";
@Injectable()
export class serviceSERVICES {
  services = [
    {
      name: 'Ambazac',
      status: 'Annulé',
    },
    {
      name: 'La foulée du populaire',
      status: 'Non-Annulé',
    },
    {
      name: 'Saint-Auvent',
      status: 'Annulé',
    },
    {
      name: 'Feytiat',
      status: 'Annulé',
    },
    {
      name: 'Vicq-sur-Breuil',
      status: 'Non-Annulé',
    },
  ];

  switchOnAll() {
    for (let service of this.services) {
      service.status = 'Non-Annulé';
    }
  }
  switchOffAll() {
    for (let service of this.services) {
      service.status = 'Annulé';
    }
  }
  switchAll() {
    for (let service of this.services) {
      if (service.status === 'Annulé') {
        service.status = 'Non-Annulé';
      } else if (service.status === 'Non-Annulé') {
        service.status = 'Annulé';
      }
    }
  }
  switchOne(index: number) {
    if (this.services[index].status === 'Annulé') {
      this.services[index].status = 'Non-Annulé';
    } else if (this.services[index].status === 'Non-Annulé') {
      this.services[index].status = 'Annulé';
    }
  }
}
