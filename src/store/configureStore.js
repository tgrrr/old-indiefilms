import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/reducers';
import sagas from '../sagas';

const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleWare)
  );

  sagaMiddleWare.run(sagas);

  return store;
}

export default configureStore;
