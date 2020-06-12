import React from "react";
import {css} from "@emotion/core";
import styled from "@emotion/styled";
import bgMobile from "../assets/images/bg-shorten-mobile.svg";
import bgDesktop from "../assets/images/bg-shorten-desktop.svg";
import Button from "./Button";

const Box = styled.form`
  background: url(${bgMobile}), var(--darkViolet);
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 13px;
  transform: translateY(-50%);

  input {
    border-radius: 8px;
    border: none;
    height: 40px;
    margin-bottom: 10px;
    padding-left: 10px;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  @media screen and (min-width: 768px) {
    background: url(${bgDesktop}), var(--darkViolet);
    flex-direction: row;
    align-items: center;
    padding: 1.5em;

    input {
      flex: 1;
      margin: 0 10px;
    }

    button{
      width: 20%;
    }
  }
`;

const Panel = () => {
  return (
    <Box>
      <input name="link"  type="text" placeholder="Shorten a link here..." />
      <Button css={css`
      border-radius: 8px;
      `} type="submit">Shorten It!</Button>
    </Box>
  );
};

export default Panel;
