import { useDispatch } from 'react-redux'

import './App.css'
import { ADD_TODO, CHECK_TODO, DELETE_TODO, DELETE_TODOS } from './constants'
import { TodoFooter } from './TodoFooter'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

function App() {
  const dispatch = useDispatch();
  
  return (
    <div className='App'>
      <h1>Todo list</h1>
      <TodoForm
        onChange={title =>
          dispatch({
            type: ADD_TODO,
            payload: {
              title,
            }
          })
        }
      />
      <TodoList
        onDelete={todo => {
          dispatch({
            type: DELETE_TODO,
            payload: {
              id: todo.id
            }
          })
        }}
        onChangeChecked={newTodo => {
          dispatch({
            type: CHECK_TODO,
            payload: {
              newTodo,
            }
          })
        }}
      />
      <TodoFooter
        onDeleteAll={() => {
          dispatch({
            type: DELETE_TODOS,
          })
        }}
      />
    </div>
  )
}

export default App
