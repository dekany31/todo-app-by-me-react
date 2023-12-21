import React from "react";
import styled from 'styled-components';

const Todos = styled.div`
display: flex;
flex-direction: row;
width: 98%;
justify-content: space-between;
`

const Checkbox = styled.input`
margin: 0 2em;
width: 1em;
transform: scale(2);
`

const Button = styled.button`
border-radius: 25%;
font-weight: bold;
`


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <Todos
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "none",
        textDecorationColor: todo.isCompleted ? "red" : "initial",
        textDecorationThickness: todo.isCompleted ? "2px" : "initial"
      }}
    >
      {todo.text}
      <div>
        <Checkbox type="checkbox" onClick={() => completeTodo(index)} />
        <Button onClick={() => removeTodo(index)}>x</Button>
      </div>
    </Todos>
  );
}

export default Todo;