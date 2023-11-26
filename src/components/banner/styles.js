import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 450px;
  overflow: hidden;

  img {
    width: 30000px;
    object-fit: cover;
  }

  .text-container {
    padding: 30px;
    font-family: sans-serif;
    color: white;
    text-shadow: 1.1px 1.1px #558abb;
    position: absolute;

    p {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 600;
    }

    h1 {
      font-size: 35px;
      text-transform: capitalize;
      font-weight: 800;

      & + * {
        margin-top: 20px;
      }
    }
  }
`;
