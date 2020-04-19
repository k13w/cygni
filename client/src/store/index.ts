import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistedReducer from './persistReducer';;

declare global {
    interface Console {
        tron: any
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer(rootReducer), applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };