import styled from "styled-components";

export const Container = styled.div`
  input {
    border: none;
    padding: 10px;
    outline: none;
    width: 100%;
    min-width: 300px;
  }

  & + * {
    margin-top: 20px;
  }
`;
