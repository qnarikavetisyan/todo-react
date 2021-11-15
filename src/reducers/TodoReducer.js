import { ADD_TODO, CHECK_TODO, DELETE_TODO, DELETE_TODOS } from '../constants/actions'

export const initalState = [
    {
      id: 1,
      title: 'Learn React',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Learn Node',
      isCompleted: false,
    },
  ]

export const TodoReducer = (state = initalState, action) => {
    switch (action.type) {
      case ADD_TODO : 
        return [
          ...state,
          { title: action.payload.title, isCompleted: false, id: state.length + 1 },
        ]
      case DELETE_TODO:
        return state.filter((it) => it.id !== action.payload.id)
      case CHECK_TODO:
        return  state.map((todo) => {
          if (todo.id === action.payload.newTodo.id) return action.payload.newTodo
          return todo
        })
      case DELETE_TODOS:
        return state.filter((todo) => !todo.isCompleted)
      default: 
        return state
    }
  }