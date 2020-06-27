import React from 'react';
import styled from '@emotion/styled';
import CardSection from './CardSection';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  h2 {
   color: var(--veryDarkBlue); 
  }

  p {
    color: var(--grayishViolet);
    text-align: center;
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
