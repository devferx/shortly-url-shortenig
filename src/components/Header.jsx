import React from "react";
import illustrationWorking from "../assets/images/illustration-working.svg";
import Button from "./Button";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 768px) {
    max-width: 1400px;
    margin: auto;
    margin-top: 2em;
    flex-direction: row-reverse;
    align-items: center;

    h1 {
      font-size: 4rem;
    }

    p{
      text-align: left;
      color: var(--grayishViolet);
    }
  }
`;

const HeaderPrincipal = () => {
  return (
    <Header>
      <img
        css={css`
          width: 100%;
          padding-left: 1em;
          box-sizing: border-box;

          @media screen and (min-width: 768px) {
            width: 50%;
          }
        `}
        src={illustrationWorking}
        alt="illustration working"
      />
      <div
        css={css`
          padding: 0px 1em;
          box-sizing: border-box;
          @media screen and (min-width: 768px) {
            margin-left: 10%;
          }
        `}
      >
        <h1
          css={css`
            color: var(--veryDarkBlue);
          `}
        >
          More than just shorter links
        </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </div>
    </Header>
  );
};

export default HeaderPrincipal;
