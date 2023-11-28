import styled from "styled-components";

export const Container = styled.nav`
  background-color: hsl(208deg 51% 17%);
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;

      a {
        color: white;
        text-decoration: none;
        font-family: sans-serif;
        padding: 15px;
        display: block;
        position: relative;

        &::before {
          content: "";
          height: 2px;
          background-color: #01b3a7;
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          transform: translateX(-50%);
          transition: width 0.3s ease-in-out;
        }

        &.active {
          background-color: hsl(208deg 51% 25%);

          &::before {
            width: 100%;
            display: block;
          }
        }

        &:hover {
          background-color: hsl(208deg 51% 35%);

          &::before {
            width: 100%;
          }
        }
      }
    }
  }
  .cart-container {
    .menu {
      display: none;
    }
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;

    .cart-container {
      display: flex;
      justify-content: space-between;

      .menu {
        display: block;
      }
    }

    ul {
      display: block;
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease-in;

      &.show-menu {
        height: calc(48px * 4);
      }
    }
  }
`;
