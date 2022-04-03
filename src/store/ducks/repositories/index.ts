import { Reducer } from 'redux';

import { RepositoriesState, RepositoriesTypes } from './types';

const initialState: RepositoriesState = {
  data: [],
  loading: false,
  error: false
};

const repositories: Reducer<RepositoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };

    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export { repositories };
