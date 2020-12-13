import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootSaga from './saga/root';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
