import React, { useState } from "react";
import Card from "./Card.jsx";
import styled from "styled-components";

const CreateCardButton = styled.button`
    margin-left: 20px;
    margin-top: 5px;
    padding: 0 20px;
    border-radius: 30px;
    outline: none;
    border: none;
    font-family: "Montserrat", sans-serif;
    padding: 15px;
    font-size: 18px;
    font-weight: 500;
    background-color: #264653;
    color: #e9c46a;
    box-shadow: 0 1px 6px #000000;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0px 3px #000000;
    }
`;

const DeleteButton = styled.button`
    border: none;
    outline: none;
    //background-color: #e76f51;
    background-color: rgb(223, 215, 80);
    color: #b63c27;
    border-top-right-radius: 10px;
    font-size: 24px;
    font-weight: 700;
    height: 30px;
    width: 30px;

    &:hover {
        cursor: pointer;
    }
`;

const Cards = (props) => {
  const [cardCount, SetCardCount] = useState(props.dashboard.cards.length);
  return (
    <>
      {[...props.dashboard.cards].map((x, index) => (
        <div
          key={"cardContainerWithDelete" + index}
          className="cardContainerWithDelete"
        >
          <Card cards={props.dashboard.cards} cardIndex={index} />
          <DeleteButton
            className="add_card_btn"
            onClick={(e) => {
              props.dashboard.cards.splice(index, 1);
              SetCardCount(props.dashboard.cards.length);
            }}
          >
            x
          </DeleteButton>
        </div>
      ))}
      <CreateCardButton
        onClick={(e) => {
          props.dashboard.cards = [
            ...props.dashboard.cards,
            {
              cardName: "card name",
              description: "description",
              descVisible: false,
            },
          ];
          SetCardCount(props.dashboard.cards.length);
        }}
      >
        + card
      </CreateCardButton>
    </>
  );
};

export default Cards;