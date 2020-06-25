import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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


  constructor() {
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
    
  }

  onAllumer(){
    console.log('oui');
  }
 
 
}
