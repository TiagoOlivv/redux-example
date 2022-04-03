import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';


import api from '../../../services/api';
import { loadSuccess, loadFailure } from '../repositories/actions';

import { Repository } from './types';

function* load() {
  try {
    const response: AxiosResponse<Repository[]> = yield call(api.get, 'users/tiagoolivv/repos');
    yield put(loadSuccess(response.data))
  } catch (error) {
    yield put(loadFailure())
  }
}

export { load };