import styled from "styled-components";

export const Container = styled.article`
  font-family: sans-serif;
  min-width: 300px;
  border: 10px solid #f4f4f4;
  padding: 40px;
  flex: 1 0 30%;

  .title-container {
    display: flex;

    span {
      font-size: 30px;
      color: #01b3a7;
      & + * {
        margin-left: 15px;
      }
    }
    h3 {
      font-size: 20px;
    }

    & + * {
      margin-top: 15px;
    }

    & + p {
      margin-left: 45px;
    }
  }
`;
