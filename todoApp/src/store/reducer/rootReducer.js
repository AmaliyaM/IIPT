const initialState = {
  todos: [],
  user: {
    name: '',
    email: '',
  },
  isLoggedIn: false,
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
    case 'CREATE_TODO': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'CREATE_TODO_SUCCESS': {
      return {
        ...state,
        todos: [...state.todos, action.data],
        loading: false,
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'DELETE_TODO_SUCCESS': {
      return {
        ...state,
        todos: state.todos.filter(item => item._id !== action.data),
        loading: false,
      };
    }
    case 'CHECK_TODO': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'CHECK_TODO_SUCCESS': {
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item._id == action.data) item.checked = !item.checked
          return item
        }),
        loading: false,
      };
    }
    case 'USER_SIGN_IN': {
      const { data: { name, email } } = action
      return {
        ...state,
         user: {
           name,
           email,
         },
         isLoggedIn: true,
      }
    }
    case 'USER_LOG_OUT': {
      return {
        ...state,
         user: initialState.user,
         todos: initialState.todos,
         isLoggedIn: false,
      }
    }
    default:
      return state;
  }
}
