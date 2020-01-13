import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Section = styled.section`
  display: flex;
  width: 100vw;
  min-height: 500px;
  background: #efe;
  padding: 80px 15px;
`;

const Work = () => {
  return (
    <Element name="work" className="element">
      <Section>
        <div>We bring digital experiences to life for humans.</div>
      </Section>
    </Element>
  );
};

export default Work;
