import React, { useRef, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import Calendar from 'react-calendar'

import Todo from '../SingleTodo'

import { startCreateTodo } from '../../../store/actionCreators/todoActions'

import './Todo.css';
import 'react-calendar/dist/Calendar.css';

const TodoList = (props) => {
  const { filterOption } = props
  const dispatch = useDispatch()
  const todosArray = useSelector(state => state.todos.filter(item => item.type === filterOption))
  const user = useSelector(state => state.user)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [value, onChange] = useState(new Date());

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
      dispatch(startCreateTodo({ label: label.trim(), type: filterOption, created_by: user.email }))     
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
        <a href="https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/971" target="_blank"><img src="https://info.weather.yandex.net/971/1_white.ru.png?domain=ru" border="0" alt="Яндекс.Погода"/><img width="1" height="1" src="https://clck.yandex.ru/click/dtype=stred/pid=7/cid=1227/*https://img.yandex.ru/i/pix.gif" alt="" border="0"/></a>
        <Calendar />
      </div>
      {isLoggedIn ? (
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
      ) : (
        <div>
          Пожалуйста, авторизуйтесть в системе, чтобы пользоваться функционалом приложения
        </div>
      )}
      
    </div>
  );
}
export default TodoList;
