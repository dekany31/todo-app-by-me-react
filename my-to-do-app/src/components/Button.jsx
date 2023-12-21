import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
    font-size: 15px;
    font-weight: bold;
    background-color: #264653;
    color: #e9c46a;
    box-shadow: 0 0 8px #000000;
    width: 50px;
    height: 50px;
    outline: none;
    border-radius: 50%;
    border: none;

    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 6px #000000;
    }
`;

const Button = (props) => {
  return (
    <AddButton id="btn" onClick={props.onClick}>
      {props.name}
    </AddButton>
  );
};

export default Button;
