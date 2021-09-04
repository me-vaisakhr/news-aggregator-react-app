import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import countingReducer from './countingReducer'
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    countingReducer,
});

export default createRootReducer;
