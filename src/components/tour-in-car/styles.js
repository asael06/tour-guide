import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #162e44;
  border-radius: 10px;
  overflow: hidden;
  font-family: sans-serif;

  .img-container {
    height: 100px;
    max-width: 100px;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  .tour-detail {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    p {
      width: 100%;
    }
  }

  .button-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  & + * {
    margin-top: 15px;
  }
`;
