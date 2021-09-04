import { createStore, applyMiddleware } from 'redux';
import createRootReducer from './reducers';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  let middlewares = [reduxThunk, routerMiddleware(history)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxLogger);
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(...enhancers)
      : middlewareEnhancer;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers,
  );
  return store;
}
