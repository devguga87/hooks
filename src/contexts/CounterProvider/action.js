import * as types from './types';

export const incrementCounter = dispatch => {
  return dispatch({ type: types.INCREMENT_COUNTER });
};

export const decrementCounter = dispatch => {
  return dispatch({ type: types.DECREMENT_COUNTER });
};
