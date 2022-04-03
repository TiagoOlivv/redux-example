import { action } from 'typesafe-actions';

import { RepositoriesTypes, Repository } from "./types";

const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

const loadSuccess = (data: Repository[]) => action(
  RepositoriesTypes.LOAD_SUCCESS, { data }
);

const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export { loadRequest, loadFailure, loadSuccess };