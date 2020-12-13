import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchTodosSuccess,
  createTodoSuccess,
  deleteTodoSuccess,
  checkTodoSuccess,
} from '../actionCreators/todoActions';

export function* fetchTodos(payload) {
  try {
    console.log('payload.data', payload.data)
    const res = yield call(axios, {
      url: `http://localhost:3000/todos/${payload.data}`,
      method: 'POST',
    })
    yield put(fetchTodosSuccess(res.data))
  } catch (error) {
    console.log(error);
  }
}

export function* createTodo(payload) {
  try {
    const { data : { label, type, created_by }} = payload
    const res = yield call(axios, {
      url: 'http://localhost:3000/todos',
      method: 'POST',
      data: { label: label, type: type, created_by: created_by },
    })
    yield put(createTodoSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

export function* deleteTodo(payload) {
  try {
    const { data : { id }} = payload
    const res = yield call(axios, {
      url: `http://localhost:3000/todos/${id}`,
      method: 'DELETE',
    })
    yield put(deleteTodoSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

export function* checkTodo(payload) {
  try {
    const { data : { id, checked }} = payload
    const res = yield call(axios, {
      url: `http://localhost:3000/todos/${id}`,
      method: 'PUT',
      data: {checked: checked},
    })
    yield put(checkTodoSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* sagas() {
  yield takeEvery('FETCH_TODOS', fetchTodos);
  yield takeEvery('CREATE_TODO', createTodo);
  yield takeEvery('DELETE_TODO', deleteTodo);
  yield takeEvery('CHECK_TODO', checkTodo);
}
