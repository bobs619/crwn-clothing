import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';
//import { fetchCollectionsStart } from './shop/shopSaga';
import rootSaga from './rootSaga';

import rootReducer from './rootReducer';
//import { fetchCollectionsAsync } from './shop/shopActions';

const sagaMiddelware = createSagaMiddleware();

const middlewares = [sagaMiddelware];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddelware.run(rootSaga);

export const persistor = persistStore(store);

//export default { store, persistor };