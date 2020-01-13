import React from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import Burger from './burger';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  height: 75px;
  padding: 0 50px;
  border-bottom: 2px solid hsla(0, 0%, 82%, 0.4);
  background: white;
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    padding: 0 30px;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex: 1;
`;

const NavBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 768px) {
    position: absolute;
    right: -99999px;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
`;

const handleSetActive = () => null;

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Header = ({ panelOpen, setPanelOpen }) => {
  return (
    <Wrapper>
      <Flex>
        <TitleBox>
          <h1 style={{ margin: 0 }}>
            <div
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={scrollToTop}
            >
              dba | design
            </div>
          </h1>
        </TitleBox>
        <NavBox>
          <Nav>
            <Link
              activeClass="active"
              id="work"
              className="menu-item"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
            >
              WORK
            </Link>
            <Link
              activeClass="active"
              id="about"
              className="menu-item"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
            >
              ABOUT
            </Link>
            <Link
              activeClass="active"
              id="contact"
              className="menu-item"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
            >
              CONTACT
            </Link>
          </Nav>
        </NavBox>
        <MobileNav>
          <div className="button-container">
            <Burger panelOpen={panelOpen} setPanelOpen={setPanelOpen} />
          </div>
        </MobileNav>
      </Flex>
    </Wrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
