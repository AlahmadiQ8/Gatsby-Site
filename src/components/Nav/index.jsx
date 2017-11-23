import React from 'react';
import Link from 'gatsby-link';

import NavLink from './NavLink';
import Container from '../Container';
import './index.scss';

const Nav = ({ location }) => (
  <div className="nav">
    <Container>
      <div className="nav__wrapper">
        <div className="nav__links-container">
          <NavLink title="Home" to="/" />
          <NavLink isActive={location.pathname.includes('/about')} title="About" to="/about" />
          <NavLink isActive={location.pathname.includes('/work')} title="Work" to="/work" />
          <NavLink isActive={location.pathname.includes('/blog')} title="Blog" to="/blog" />
        </div>
      </div>
    </Container>
  </div>
);

export default Nav;
