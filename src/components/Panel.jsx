import React, { useState, useRef } from "react";
import axios from "axios";
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
  const [userValue, setUserValue] = useState("");
  const [links, setLinks] = useState([]);
  const input = useRef();
  const alert = useRef();

  const handleChange = (event) => {
    setUserValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userValue === "") {
      input.current.classList.add("active");
      alert.current.classList.add("label-active");
      return;
    }

    try {
      const data = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
        { url: userValue }
      );
      setUserValue("Loading ...");

      if (input.current.classList.contains("active")) {
        input.current.classList.remove("active");
        alert.current.classList.remove("label-active");
      }

      const newLink = {
        original: userValue,
        shortLink: data.data.result_url,
      };
      setLinks([newLink, ...links]);
      setUserValue("");
    } catch (error) {
      console.log(error);
      window.alert("Algo salio mal :(");
    }
  };

  return (
    <>
      <Box onSubmit={handleSubmit}>
        <input
          ref={input}
          name="link"
          type="text"
          onChange={handleChange}
          value={userValue}
          placeholder="Shorten a link here..."
        />
        <p ref={alert} className="label">
          Please add a link
        </p>
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
