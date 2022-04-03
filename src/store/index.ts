import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import root, { rootSaga } from './ducks/root';

import { Todo } from './ducks/todos/types';
import { RepositoriesState } from './ducks/repositories/types';

export interface ApplicationState {
  todos: Todo[],
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  root, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
