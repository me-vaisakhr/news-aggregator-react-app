import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//for testing the biolerplate
import countingReducer from './countingReducer'
import exampleReducer from './exampleReducer'
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    countingReducer,
    exampleReducer
});

export default createRootReducer;
