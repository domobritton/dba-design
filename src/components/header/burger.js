import React from 'react';
import { HamburgerSpring } from 'react-animated-burgers';

const Burger = ({ panelOpen, setPanelOpen }) => {

  return (
    <HamburgerSpring
      isActive={panelOpen}
      type="slider"
      onClick={() => setPanelOpen(a => !a)}
      buttonColor="transparent"
      barColor="black"
      style={{ padding: 0 }}
    />
  );
};

export default Burger;
