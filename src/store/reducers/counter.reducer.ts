import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) =>{
      console.log("the increment in reducer | typeof increment === " + increment,typeof( increment) ,"()---->",increment().type)
    return   state + 1
    }),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);