import React, { useState } from "react";
import TodoForm from "./TodoForm";
import styled from 'styled-components';

const CardInput = styled.input`
font-size: 1.5em;
width: 98%;
border: none;
background-color: rgb(223, 215, 80);
`

const Card = (props) => {
  const [descVisible, SetDescVisible] = useState(
    props.cards[props.cardIndex].descVisible
  );
  const [cardName, SetCardName] = useState(
    props.cards[props.cardIndex].cardName
  );
  return (
    <div
      className="cardWithDescription"
      id="cardWithDescription"
      onClick={(e) => {
        if (e.target.id === "cardWithDescription") {
          props.cards[props.cardIndex].descVisible = !props.cards[
            props.cardIndex
          ].descVisible;
          SetDescVisible(props.cards[props.cardIndex].descVisible);
        }
      }}
    >
      <CardInput
        className="cardNameInput"
        type="text"
        onChange={(e) => {
          props.cards[props.cardIndex].cardName = e.target.value;
          SetCardName(e.target.value);
        }}
        value={props.cards[props.cardIndex].cardName}
        autoComplete="off"
      />
      <TodoForm />
    </div>
  );
};

export default Card;