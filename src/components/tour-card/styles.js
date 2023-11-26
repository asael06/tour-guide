import styled from "styled-components";

export const Container = styled.article`
  width: 300px;
  height: 400px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  .filter {
    position: absolute;
    background-color: hsl(177deg 0% 5%);
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    transition: opacity 0.3s ease;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      position: static;
      transform: none;
      text-shadow: none;
    }
  }

  img {
    height: 500px;
    object-fit: fill;
    transition: transform 0.3s ease-in;
    transform-origin: center;
  }

  h3,
  .cart {
    position: absolute;
    z-index: 10;
  }

  h3 {
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: sans-serif;
    color: white;
    font-size: 20px;
    text-shadow: 1px 1px #558abb;
  }

  .cart {
    top: 15px;
    right: 15px;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
    .filter {
      opacity: 0.5;
    }
  }
`;
