const initialState = {
  todos: [],
  loading: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS': {
     return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_TODOS_SUCCESS': {
      return {
        ...state,
        todos: action.data,
        loading: false,
      };
    }
    case 'LOGIN_USER_SUCCESS': {
      return {
        ...state,
        isLogin: true,
      };
    }
    case 'LOGOUT_USER': {
      return {
        ...state,
        isLogin: false,
      };
    }
    case 'CHECK_TOKEN': {
      return {
        ...state,
        isLogin: true,
      };
    }
    case 'START_LOGIN_USER': {
      return {
        ...state,
        users: action.data,
      };
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        users: action.data,
      };
    }
    default:
      return state;
  }
}
