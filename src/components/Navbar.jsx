import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 30px;
  }

  .checkbox {
    display: none;
  }

  .checkbox:checked ~ .links {
    display: flex;
  }

  .menu {
    font-size: 2em;
    user-select: none;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 30px;
    .menu {
      display: none;
    }
  }
`;

const Links = styled.ul`
  display: none;
  box-sizing: border-box;
  position: absolute;
  height: 50vh;
  bottom: -50vh;
  left: 0;
  width: 80%;
  margin: 0px 10%;
  background-color: var(--darkViolet);
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  list-style: none;
  padding: 0;

  li {
    margin-top: 12px;
  }

  hr {
    width: 80%;
    height: 1px;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user-actions {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid var(--grayishViolet);
  }

  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    color: var(--gray);
    height: auto;
    margin: 0px;
    margin-left: 1em;

    .links-container {
      flex-direction: row;
    }

    .link {
      margin-right: 10px;
      margin-top: 0;
      cursor: pointer;
      font-weight: bold;
    }

    .user-actions {
      flex-direction: row;
      border-top: none;
      justify-content: flex-end;
      width: 20%;
      font-weight: bold;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="wrapper">
      <img src={Logo} alt="Logo" />
      <label htmlFor="checkbox">
        <span className="material-icons menu">menu</span>
      </label>
      <input
        className="checkbox"
        type="checkbox"
        id="checkbox"
        value={false}
        name="checkbox"
      />
      <Links className="links">
        <div className="links-container">
          <li className="link">Features</li>
          <li className="link">Pricing</li>
          <li className="link">Resources</li>
        </div>

        <div className="user-actions">
          <li
            css={css`
              cursor: pointer;
            `}
          >
            Login
          </li>
          <Button
            css={css`
              width: 100%;
              margin-top: 1em;
              padding: 1em 0px;
              margin-bottom: 10px;

              @media screen and (min-width: 768px) {
                margin-left: 1rem;
                width: 150px;
                height: 50%;
              }
            `}
          >
            Sign Up
          </Button>
        </div>
      </Links>
    </Nav>
  );
};

export default Navbar;
