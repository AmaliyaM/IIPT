export function startFetchTodos() {
  return { type: 'FETCH_TODOS' };
}

export function fetchTodosSuccess(data) {
  return { type: 'FETCH_TODOS_SUCCESS', data };
}

export function startCreateTodo(label) {
  return { type: 'CREATE_TODO', label };
}

export function loginUserSuccess(data) {
  return { type: 'LOGIN_USER_SUCCESS', data };
}

export function logoutUser(data) {
  return { type: 'LOGOUT_USER', data };
}

export function checkToken(data) {
  return { type: 'CHECK_TOKEN', data };
}


export function startLoginUser(login, password, res) {
  return {
    type: 'START_LOGIN_USER',
    payload: {
      login,
      password,
      res,
    },
  };
}

export function loginUser(data) {
  return {
    type: 'AUTO_SIGNIN_USER',
    data,
  };
}

export function applyChanges(login, password, id, oldLogin, oldPassword) {
  return {
    type: 'UPDATE_USER',
    payload: {
      login,
      password,
      id,
      oldLogin,
      oldPassword,
    },
  };
}

export function applyAvatar(file, id, login, password, res) {
  return {
    type: 'UPDATE_AVATAR',
    payload: {
      file,
      id,
      data: {
        login,
        password,
        res,
      },
    },
  };
}
