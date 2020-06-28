export class serviceSERVICES {
    services=[
        {
          name: 'Ambazac',
          status: 'Annulé'
        },
        {
          name: 'Course2',
          status: 'Non-Annulé'
        },
        {
          name: 'Course3',
          status: 'Annulé'
        },
        {
          name: 'Course4',
          status: 'Annulé'
        },
        {
          name: 'Course5',
          status: 'Non-Annulé'
        },
    
      ];

      switchOnAll(){
          for(let service of this.services){
              service.status = 'Non-Annulé'
          }
      }
      switchOffAll(){
        for(let service of this.services){
            service.status = 'Annulé'
        }
      }
      switchAll () {
        for(let service of this.services){
            if (service.status === 'Annulé'){
                service.status = 'Non-Annulé'
            }
            else if (service.status === 'Non-Annulé')
            {
                service.status = 'Annulé'
            }
            
        }
      }
      switchOne(index: number){

        if (this.services[index].status === 'Annulé'){
            this.services[index].status = 'Non-Annulé';
            
        }
        else if (this.services[index].status === 'Non-Annulé')
        {
            this.services[index].status = 'Annulé'
            
        }
        
      }
      
}