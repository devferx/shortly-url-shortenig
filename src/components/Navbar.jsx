import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/images/logo.svg";

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
  padding:0;

  li{
    margin-bottom: 12px;
  }

  hr {
    width: 80%;
    height: 1px;
  }

  .button{
    border: none;
    color: white;
    width: 80%;
    padding: 1em 0px;
    border-radius: 100px;
    background-color: var(--cyan);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    margin-bottom: 10px;
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
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <hr/>
        <li>Login</li>
        <button className="button">Sign Up</button>
      </Links>
    </Nav>
  );
};

export default Navbar;
