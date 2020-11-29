import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './saga/root';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools(),
);

const store = createStore(
  rootReducer,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
