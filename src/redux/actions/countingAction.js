import { toast } from 'react-toastify';

import {
    COUNT_INCREMENT,
    COUNT_DECREMENT
} from '../actionTypes/countingActionTypes';

export const incrementAction = () => {
    return async dispatch => {
      dispatch(incrementCounter());
    };
};

export const decrementAction = () => {
    return async dispatch => {
      dispatch(decrementCounter());
    };
};
  
export const incrementCounter = () => ({
    type: COUNT_INCREMENT,
});

export const decrementCounter = () => ({
    type: COUNT_DECREMENT,
});
  

  
