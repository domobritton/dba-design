import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';

const MenuItem = styled(Link)`
  padding: 15px 0;
`;

const panelStyle = () => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  background: '#45B0F9',
});

const menuStyle = () => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const MobileMenu = ({ panelOpen, setPanelOpen }) => {
  const panelProps = useSpring({
    transform: panelOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(0, -100%, 0)',
  });
  const menuProps = useSpring({
    transform: panelOpen ? 'translate3d(0, 0%, 0)' : 'translate3d(0, -250%, 0)',
    delay: 100,
  });

  const handleSetActive = () => null;

  return (
    <div className="appContainer">
      <animated.div style={{ ...panelProps, ...panelStyle() }}>
        <animated.div style={{ ...menuProps, ...menuStyle() }}>
          <MenuItem
            activeClass="active"
            id="work"
            className="menu-item"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setPanelOpen(a => !a)}
            onSetActive={handleSetActive}
          >
            WORK
          </MenuItem>
          <MenuItem
            activeClass="active"
            id="about"
            className="menu-item"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setPanelOpen(a => !a)}
            onSetActive={handleSetActive}
          >
            ABOUT
          </MenuItem>
          <MenuItem
            activeClass="active"
            id="contact"
            className="menu-item"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setPanelOpen(a => !a)}
            onSetActive={handleSetActive}
          >
            CONTACT
          </MenuItem>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default MobileMenu;
