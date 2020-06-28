import React from 'react';
import styled from '@emotion/styled';
import CardSection from './CardSection';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
   color: var(--veryDarkBlue); 
  }

  p {
    color: var(--grayishViolet);
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 2em;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <CardSection />
    </AboutSection>
  );
};

export default About;
