import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  background-color: #f7f7f7;
  padding: 20px;
  font-family: sans-serif;

  h2 {
    text-align: center;
    & + * {
      margin-top: 20px;
    }
  }
  form {
    .input-container {
      display: flex;
      flex-direction: column;

      & + * {
        margin-top: 20px;
      }
    }
    button {
      border: none;
    }
  }
`;
