/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Header, MobileMenu } from './header';

import './layout.css';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileHeader = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div id="outer-container">
      <MobileHeader>
        <MobileMenu panelOpen={panelOpen} setPanelOpen={setPanelOpen} />
      </MobileHeader>
      <Header panelOpen={panelOpen} setPanelOpen={setPanelOpen} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1680,
          minHeight: 1700,
        }}
      >
        <Main>{children}</Main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
