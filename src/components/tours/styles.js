import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f7f7f7;

  h2 {
    text-align: center;
    width: 100%;
    font-size: 35px;
    font-family: sans-serif;

    & + * {
      margin-top: 30px;
    }
  }

  .tours-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;
