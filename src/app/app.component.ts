import { Component, OnInit, ContentChildren, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  counterSubscription:Subscription;
  secondes: number;
  
 constructor(){
   
 }
 ngOnInit(){
   const counter = interval(1000);
   this.counterSubscription = counter.subscribe(
     (value:number) => {
       this.secondes = value;
     }
   );

 }
 ngOnDestroy(){
   this.counterSubscription.unsubscribe();
 }
 
 
}
