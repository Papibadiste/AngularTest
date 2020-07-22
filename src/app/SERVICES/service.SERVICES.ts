import { Injectable } from "@angular/core";
@Injectable()
export class serviceSERVICES {
  services = [
    {
      id: 1,
      name: 'Ambazac',
      status: 'Annulé',
      description: 'Course de 10km pas ouf',
      temps: '1h30'
    },
    {
      id: 2,
      name: 'La foulée du populaire',
      status: 'Non-Annulé',
      description: 'Course de 5km sympa',
      temps: '30min'
    },
    {
      id: 3,
      name: 'Saint-Auvent',
      status: 'Annulé',
      description: 'Course merdique',
      temps: "J'ai perdu la puce mdr"
    },
    {
      id: 4,
      name: 'Feytiat',
      status: 'Annulé',
      description: 'Meilleur course nocturne 13km',
      temps: '1h45'
    },
    {
      id: 5,
      name: 'Vicq-sur-Breuil',
      status: 'Non-Annulé',
      description: "ALED C'EST TROP DUR",
      temps: '2h30'
    },
  ];

  getServicesByID(id:number){
    const service = this.services.find(
      (serviceObjet) => {
        return serviceObjet.id ===id;
      }
    );
    return service;
  }

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
