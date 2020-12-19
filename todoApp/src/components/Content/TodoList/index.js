import React, { useRef, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Todo from "../SingleTodo";

import { startCreateTodo } from "../../../store/actionCreators/todoActions";

import { ListContainer, InputControl, Todos, OverflowContainer } from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "400px",
    flexWrap: "wrap",
    marginRight: "10px",
  },
}));

const TodoList = (props) => {
  const classes = useStyles();
  const { filterOption } = props;
  const dispatch = useDispatch();
  const todosArray = useSelector((state) =>
    state.todos.filter((item) => item.type === filterOption)
  );
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [label, setLabel] = useState("");

  const handleChange = (event) => {
    setLabel(event.target.value);
    if (event.target.charCode === 13) {
      submitNewTodo();
    }
  };

  const inputHandle = (event) => {
    if (event.charCode === 13) {
      submitNewTodo();
    }
  };

  const submitNewTodo = useCallback(() => {
    if (label.trim()) {
      dispatch(
        startCreateTodo({
          label: label.trim(),
          type: filterOption,
          created_by: user.email,
        })
      );
      setLabel("");
    }
  }, [startCreateTodo, filterOption, label]);

  return (
    <ListContainer>
      <Todos>
        {isLoggedIn ? (
          <>
            <InputControl>
              <TextField
                className={classes.root}
                id="filled-basic"
                value={label}
                label="Type what do you want to add"
                variant="filled"
                onChange={handleChange}
                onKeyPress={inputHandle}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={submitNewTodo}
              >
                Add
              </Button>
            </InputControl>
            <OverflowContainer>
            {todosArray.map((item) => (
              <Todo todo={item} />
            ))}
            </OverflowContainer>
          </>
        ) : (
          <div>
            Пожалуйста, авторизуйтесть в системе, чтобы пользоваться
            функционалом приложения
          </div>
        )}
      </Todos>
    </ListContainer>
  );
};
export default TodoList;
