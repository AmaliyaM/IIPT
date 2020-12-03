import React from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { startDeleteTodo, startCheckTodo } from '../../../store/actionCreators/todoActions'

const Todo = (props) => {
  const { todo } = props
  const dispatch = useDispatch()

  const deleteTodo = () => {
    dispatch(startDeleteTodo({ id: todo._id }))
  }

  const checkTodo = () => {
    dispatch(startCheckTodo({ id: todo._id, checked: todo.checked }))
  }

  return (
    <div className="todoContainer">
      <Checkbox
        checked={todo.checked}
        onChange={checkTodo}
      />
      <Typography variant="body1" display='inline' style={{ textDecoration: todo.checked? 'line-through' : 'none' }}>
        {todo.label}
      </Typography>
      <IconButton onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
export default Todo;
