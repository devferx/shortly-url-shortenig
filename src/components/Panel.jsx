import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import LinkList from "./LinkList";
import Button from "./Button";
import bgMobile from "../assets/images/bg-shorten-mobile.svg";
import bgDesktop from "../assets/images/bg-shorten-desktop.svg";

const Box = styled.form`
  background: url(${bgMobile}), var(--darkViolet);
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 13px;
  transform: translateY(-50%);
  display: grid;
  row-gap: 5px;

  input {
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
  }

  .active {
    border: 2px solid var(--red);
  }

  .active::placeholder {
    color: var(--red);
    opacity: 0.65;
  }

  .label {
    font-size: 0.6em;
    margin: 0px;
    color: var(--red);
    display: none;
  }

  .label-active {
    display: block;
  }

  @media screen and (min-width: 768px) {
    background: url(${bgDesktop}), var(--darkViolet);
    grid-template-columns: 1fr 20%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "input button"
      "label .";
    column-gap: 10px;
    padding: 1.5em;

    input {
      grid-area: input;
    }

    button {
      width: 100%;
      height: 40px;
      grid-area: button;
    }

    .label {
      grid-area: label;
    }
  }
`;

const Panel = () => {
  const [links, setLinks] = useState([
    {
      original: "https://rel.ink/",
      shortLink: "https://rel.ink/MnKbVk",
    },
    {
      original: "https://rel.ink/",
      shortLink: "https://rel.ink/MnKbVk",
    },
    {
      original: "https://rel.ink/",
      shortLink: "https://rel.ink/MnKbVk",
    },
  ]);

  return (
    <>
      <Box>
        <input name="link" type="text" placeholder="Shorten a link here..." />
        <p className="label">Please add a link</p>
        <Button
          css={css`
            border-radius: 8px;
            padding: 10px;
          `}
          type="submit"
        >
          Shorten It!
        </Button>
      </Box>

      <LinkList links={links} />
    </>
  );
};

export default Panel;
