import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .cart-container {
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    background-color: #f7f7f7;
    padding: 20px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow: hidden;
    position: relative;

    h2 {
      text-align: center;
      & + * {
        margin-top: 20px;
      }

      &.emtpy-cart {
        height: 300px;
        line-height: 300px;
      }
    }

    .tours-list {
      flex: 1 1;
      overflow: auto;
      min-height: 300px;

      & + * {
        margin-top: 20px;
      }
    }

    .close {
      position: absolute;
      right: 15px;
      top: 15px;
    }

    .button-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
