import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { fetchTodosSuccess } from '../actionCreators/todoActions';

export function* fetchTodos() {
  try {
    const res = yield call(axios, { url: 'http://localhost:3000/todos' });
    console.log('Response! ', res.data)
    yield put(fetchTodosSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}
export function* createTodo(payload) {
  try {
    console.log('label', payload)
    const res = yield call(axios, {
      url: 'http://localhost:3000/todos',
      method: 'POST',
      data: { label: payload.label },
    })
    console.log('Response! ', res)
    // yield put(fetchNewsSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* news() {
  yield takeEvery('FETCH_TODOS', fetchTodos);
  yield takeEvery('CREATE_TODO', createTodo);
}
