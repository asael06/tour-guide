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

  .detail-box {
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    background-color: #f7f7f7;
    padding: 20px;
    font-family: sans-serif;

    .button-container {
      display: flex;
      flex-direction: row-reverse;
    }

    h2 {
      font-size: 25px;
      font-weight: 300;

      span {
        font-weight: 600;
      }
    }

    .img-container {
      overflow: hidden;
      height: 200px;

      img {
        width: 500px;
        object-fit: cover;
      }
    }

    .price-rate-box {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 20px;

        span {
          font-weight: 600;
        }
      }
    }

    > * + * {
      margin-top: 10px;
    }
  }
`;
