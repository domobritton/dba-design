import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Section = styled.section`
  display: flex;
  width: 100vw;
  min-height: 1000px;
  background: #eef;
  padding: 80px 15px;
`;

const Contact = () => {
  return (
    <Element name="contact" className="element">
      <Section>
        <div>We bring digital experiences to life for humans.</div>
      </Section>
    </Element>
  );
};

export default Contact;
