import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: #01b3a7;
  color: white;
  outline: none;
  font-family: sans-serif;
  font-size: 16px;
  padding: 15px 20px;
  cursor: pointer;

  &.white-transparent {
    border: 1px solid black;
    background-color: transparent;
    color: black;

    &:hover {
      background-color: white;
      opacity: 1;
    }
  }

  &.black-transparent {
    border: 1px solid white;
    background-color: transparent;
    color: white;

    &:hover {
      background-color: black;
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;
