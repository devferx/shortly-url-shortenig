import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import logo from '../assets/images/logo-white.svg';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.2em;
  color: white;

  .logo img {
    width: 100%;
  }

  .features,
  .resources,
  .company,
  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      padding: 0;

      li {
        color: var(--grayishViolet);
        text-align: center;
        margin-bottom: 1em;
      }
    }
  }

  .social-icons {
    margin: 10px 0;
    flex-direction: row;
    justify-content: center;
    .icon {
      font-size: 1.5em;
      margin-right: 1em;
    }

    .icon:last-child {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;

    .logo {
      justify-content: flex-start;
      align-items: flex-start;
      img {
        width: 50%;
      }
    }

    div{
      align-items: flex-start;
      height:100%;
    }

    .social-icons {
      justify-content: center;
      align-items: flex-start;
      margin: 0px;
      
      .icon {
        margin-right: 10px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: var(--veryDarkViolet);
      `}
    >
      <div className="wrapper">
        <FooterContainer>
          <div className="logo">
            <img src={logo} alt="Logo Shortly" />
          </div>
          <div className="features">
            <span>Features</span>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="resources">
            <span>Resources</span>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="company">
            <span>Company</span>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook-square icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-pinterest icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
        </FooterContainer>
      </div>
    </footer>
  );
};

export default Footer;
