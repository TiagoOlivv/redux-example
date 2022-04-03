import { action } from 'typesafe-actions';

import { TodosTypes } from './types';

const addTodo = (id: string, name: string) => action(
  TodosTypes.ADD_TODO,
  { id, name }
);

const deleteTodo = (id: string) => action(
  TodosTypes.DELETE_TODO,
  { id }
);

export { addTodo, deleteTodo };