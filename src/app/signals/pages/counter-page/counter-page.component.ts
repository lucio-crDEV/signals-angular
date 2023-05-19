import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  // signal 
  public counter = signal(10);
  public squareCounter = computed( ()=>{ return this.counter() * this.counter()} );

  // suma resta
  increaseBy( value : number ){
    this.counter.update( current => current + value )
  };

};