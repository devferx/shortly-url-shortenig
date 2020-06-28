import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import bgMobile from '../assets/images/bg-boost-mobile.svg';
import bgDesktop from '../assets/images/bg-boost-desktop.svg';

const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0;
  background: url(${bgMobile}), var(--darkViolet);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h2 {
    color: white;
  }

  @media screen and (min-width: 768px) {
    background: url(${bgDesktop}), var(--darkViolet);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    h2 {
      font-size: 2em;
    }
  }
`;

const Banner = () => {
  return (
    <BannerSection className="">
      <div className="wrapper">
        <h2>Boost your links today</h2>
        <Button>Get Started</Button>
      </div>
    </BannerSection>
  );
};

export default Banner;
