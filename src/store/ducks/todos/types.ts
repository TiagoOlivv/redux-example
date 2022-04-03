// Action Types
enum TodosTypes { 
  ADD_TODO = '@todos/ADD_TODO',
  DELETE_TODO = '@todos/DELETE_TODO',
}

// Data Types
interface Todo { 
  id: string;
  name: string;
};

export { Todo, TodosTypes };