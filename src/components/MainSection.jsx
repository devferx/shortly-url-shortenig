import React from "react";
import Panel from "./Panel";
import styled from "@emotion/styled";
import About from "./About";

const Section = styled.section`
  background-color: #F0F1F6;
  margin-top: 5em;
`;

const MainSection = () => {
  return (
    <Section className="wrapper">
      <Panel />
      <About />
    </Section>
  );
};

export default MainSection;
