import { Component } from '@angular/core';

import { Store } from "@ngrx/store";

import { State } from "./state/state/state";

import { INCREMENT, DECREMENT, INCREMENTSTRING, DECREMENTSTRING} from "./state/reducers/reducers";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'app works!';
  data = '';
  nameToDisplay = '';

  constructor (private store:Store<State>){
    console.log(store);
    store.select('mainStoreReducer')
      .subscribe( (data:State ) => {
        this.data = 'Counter value is ' + data.counter;
        this.nameToDisplay = 'Counter value is ' + data.name;
      });
  }
  increment(){
    this.store.dispatch({type: INCREMENT});
  }
  decrement(){
    this.store.dispatch({type: DECREMENT});
  }
  addString(){
    this.store.dispatch({type: INCREMENTSTRING});
  }
  removeString(){
    this.store.dispatch({type: DECREMENTSTRING});
  }

  
}
