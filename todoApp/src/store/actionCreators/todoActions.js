export function startFetchTodos() {
  return { type: 'FETCH_TODOS' };
}

export function fetchTodosSuccess(data) {
  return { type: 'FETCH_TODOS_SUCCESS', data };
}

export function startCreateTodo(data) {
  return { type: 'CREATE_TODO', data };
}

export function createTodoSuccess(data) {
  return { type: 'CREATE_TODO_SUCCESS', data };
}

export function startDeleteTodo(data) {
  return { type: 'DELETE_TODO', data };
}

export function deleteTodoSuccess(data) {
  return { type: 'DELETE_TODO_SUCCESS', data };
}

export function startCheckTodo(data) {
  return { type: 'CHECK_TODO', data };
}

export function checkTodoSuccess(data) {
  return { type: 'CHECK_TODO_SUCCESS', data };
}
