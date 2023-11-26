import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 100px);

  .purchase-detail {
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;

    .text-container {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 25px;
        font-family: sans-serif;
      }
      & + * {
        margin-top: 20px;
      }
    }

    .tours-container {
      overflow: auto;
      flex: 1 1;
    }
  }

  & > * {
    flex: 1 1;
    min-width: 50%;
  }
`;
