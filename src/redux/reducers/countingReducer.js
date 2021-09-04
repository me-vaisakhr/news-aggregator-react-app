import {
  COUNT_INCREMENT,
  COUNT_DECREMENT
} from '../actionTypes/countingActionTypes';

const initialState = {
  count:0
};

const countingReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {count:state.count+1};

    case COUNT_DECREMENT:
      return {count:state.count-1};

    default:
      return state;
  }
};

export default countingReducer;
