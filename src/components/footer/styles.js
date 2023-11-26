import styled from "styled-components";

export const Container = styled.footer`
  .contact-data {
    background-color: #162e44;
    padding: 20px;
    display: flex;
    gap: 35px;
    justify-content: center;
    flex-wrap: wrap;

    .contact-info,
    .social {
      font-family: sans-serif;
      color: white;
      h3 {
        font-size: 20px;

        & + * {
          margin-top: 15px;
        }
      }

      p {
        font-size: 15px;
        vertical-align: middle;

        span {
          color: #01b3a7;
          font-size: 15px;
          margin-right: 10px;
        }

        & + * {
          margin-top: 10px;
        }
      }
    }
  }

  .copyright {
    background-color: #11263a;
    padding: 20px;
    color: white;
    font-family: sans-serif;
    font-size: 15px;
    text-align: center;
  }
`;
