import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import persistedReducer from './persistReducer';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { UserState } from './types'
import { createStore, applyMiddleware, Store } from 'redux';

export interface ApplicationState {
    auth: UserState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(persistedReducer(rootReducer), applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };