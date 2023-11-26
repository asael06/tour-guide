import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: #01b3a7;
  color: white;
  outline: none;
  font-family: sans-serif;
  padding: 15px 20px;
  cursor: pointer;

  &.normal {
    p {
      font-size: 16px;
      text-transform: none;
    }

    &:hover {
      background-color: #008b81;
    }

    &:disabled {
      background-color: darkgray;
    }
  }

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

  &.cart {
    background-color: hsl(208deg 51% 17%);
    border-radius: 25px;
    height: 45px;
    width: 45px;
    padding: 10px;
    transition: width 0.5s ease-in-out;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    p {
      transition: width 0.7s ease;
      white-space: nowrap;
      width: 0;
      display: block;
      overflow: hidden;
    }

    &:hover {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: hsl(208deg 51% 35%);
      ${(props) => props.label && "width: 170px"};

      p {
        width: 110px;
      }
    }
  }

  &.close,
  &.delete {
    background-color: coral;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    span {
      color: white;
      font-size: 30px;
    }

    &:hover {
      background-color: red;
    }
  }
`;
