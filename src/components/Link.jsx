import React, { useRef } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Button from "./Button";

const LinkBox = styled.div`
  background-color: white;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 0.9em;
  }

  .info {
    margin-top: 10px;
    border-top: 1px solid var(--gray);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      color: var(--cyan);
      margin: 10px 0px;
    }

    .button {
      transition: ease 200ms;
    }

    .button-active {
      background-color: var(--darkViolet);
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .info {
      border-top: none;
      flex-direction: row;
      justify-content: flex-end;

      .button {
        margin-left: 1em;
        width: 125px;
      }
    }
  }
`;

const Link = ({ original, shortLink }) => {
  const buttonRef = useRef();

  const handleClick = () => {
    navigator.clipboard.writeText(shortLink).then(() => {
      const button = buttonRef.current;
      button.textContent = "Copied!";
      button.classList.add("button-active");

      setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("button-active");
      }, 1000);
    });
  };

  return (
    <LinkBox>
      <p>{original}</p>
      <div className="info">
        <a href={shortLink} target="_link">
          {shortLink}
        </a>
        <Button
          className="button"
          ref={buttonRef}
          css={css`
            border-radius: 8px;
            padding: 10px;
          `}
          onClick={handleClick}
        >
          Copy
        </Button>
      </div>
    </LinkBox>
  );
};

export default Link;
