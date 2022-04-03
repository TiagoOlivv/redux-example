// Action Types
enum RepositoriesTypes {
  LOAD_REQUEST = '@repositores/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositores/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositores/LOAD_FAILURE',
}

// Data Types
interface Repository {
  id: number,
  name: string,
};

// State Type
interface RepositoriesState {
  readonly data: Repository[],
  readonly loading: boolean,
  readonly error: boolean
}

export { Repository, RepositoriesState, RepositoriesTypes };