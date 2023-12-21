import React, { useState } from "react";
import Todo from "./Todo";
import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 10%;
width: 100%;
background: yellow;
font-size: 1.7em;
padding: 1.5em 0 2em 0;
`
const TodoList = styled.div`
height: 70%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
background: yellow;
font-size: 1.1em;
`
const Input = styled.input`
font-size: 0.8em;
width: 70%;
border: none;
border-radius: 50px;
background: #e0e0e0;
box-shadow: inset 5px 5px 10px #bebebe,
            inset -5px -5px 10px #ffffff;
`

function TodoForm() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted; // Toggle;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <label htmlFor="todoList">Daily tasks: </label><br />
        <Input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Form>
      <TodoList>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />

        ))}
      </TodoList>
    </>
  );
}

export default TodoForm;