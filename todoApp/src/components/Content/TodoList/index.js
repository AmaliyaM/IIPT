import React, { useRef, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core';

import Todo from '../SingleTodo'

import { startCreateTodo } from '../../../store/actionCreators/todoActions'

import './Todo.css';


const TodoList = (props) => {
  const { filterOption } = props
  const dispatch = useDispatch()
  const todosArray = useSelector(state => state.todos.filter(item => item.type === filterOption))

  const [label, setLabel] = useState('');

  const handleChange = (event) => {
    setLabel(event.target.value);
    if (event.target.charCode === 13) {
      submitNewTodo()
    }
  };

  const inputHandle = (event) => {
    if (event.charCode === 13) {
      submitNewTodo()
    }
  }

  const submitNewTodo = useCallback(() => {
    if (label.trim()) {
      dispatch(startCreateTodo({ label: label.trim(), type: filterOption }))     
      setLabel('')
    }
  }, [startCreateTodo, filterOption, label])

  return (
    <div className="content">
      <div className="leftPanel">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round" />
        </label>
      </div>
      <div className="inside">
        <TextField
          id="filled-basic"
          value={label}
          label='Type what do you want to add'
          variant="filled"
          onChange={handleChange}
          onKeyPress={inputHandle}
        />    
        <Button variant="outlined" color="primary" onClick={submitNewTodo}>
          Add
        </Button>
        {todosArray.map(item => <Todo todo={item} />)}
      </div>
    </div>
  );
}
export default TodoList;
