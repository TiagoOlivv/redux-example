import { Reducer } from 'redux';

import { TodosTypes, Todo } from "./types";

const initialState: Todo[] = [];

const todos: Reducer<Todo[]> = (state = initialState, action) => {
  switch (action.type) {
    case TodosTypes.ADD_TODO:
      return [...state, action.payload];

    case TodosTypes.DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }
  
    default:
      return state;
  }
};

export { todos };