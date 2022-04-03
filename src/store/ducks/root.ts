import { combineReducers } from 'redux';
import { takeLatest, all, AllEffect, ForkEffect } from 'redux-saga/effects';

import { todos } from './todos';
import { repositories } from './repositories';
import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

export function* rootSaga(): Generator<AllEffect<ForkEffect<never>>, unknown> {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
};

export default combineReducers({ todos, repositories });