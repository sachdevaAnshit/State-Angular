import { ActionReducer, Action } from '@ngrx/store';

import { State, intitialState } from "../state/state";

/* Various Actions */
export const INCREMENT : string = "INCREMENT";
export const DECREMENT : string = "DECREMENT";
export const INCREMENTSTRING : string = "INCREMENTSTRING";
export const DECREMENTSTRING : string = "DECREMENTSTRING";

export const mainStoreReducer: ActionReducer<State> =
    (state = intitialState, action: Action) => {
    console.log('Action came in ' + action.type);
   switch(action.type) {
      case INCREMENT: {
        return { ...state, counter: state.counter + 1 }
      }
     case DECREMENT: {
        return { ...state, counter: state.counter - 1 }
      }
      case INCREMENTSTRING: {
        return { ...state, name: state.name + " Sachdeva" }
      }
      case DECREMENTSTRING: {
        return { ...state, name: state.name + " Sharma" }
      }
      default: {
        return state;
      }
    }
};