import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 458px;
  margin-top: 88px;
  line-height: 56px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  border-radius: 5px;
  max-width: 714px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    max-width: 210px;
    background: #04d361;
    padding: 19px 64px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 714px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
