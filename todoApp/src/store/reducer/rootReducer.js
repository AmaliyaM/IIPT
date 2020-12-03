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
    default:
      return state;
  }
}
