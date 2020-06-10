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

  @media screen and (min-width: 768px){
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
  padding:0;

  li{
    margin-top: 12px; 
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

  .user-actions{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid var(--grayishViolet);
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
        <li className="link">Features</li>
        <li className="link">Pricing</li>
        <li className="link">Resources</li>
        <div className="user-actions">
        <li>Login</li>
        <button className="button">Sign Up</button>
        </div>
      </Links>
    </Nav>
  );
};

export default Navbar;
