import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import monitorReducerEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import combineReducers from './reducer/index';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(loggerMiddleware, sagaMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

function store() {
  const store = configureStore({
    reducer: combineReducers,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    enhancers: [composedEnhancers]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(combineReducers))
  }

  return store
}
export default store();
