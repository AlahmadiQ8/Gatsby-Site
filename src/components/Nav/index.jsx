import React from 'react';

import NavLink from './NavLink';
import SocialLinks from '../SocialLinks';
import Container from '../Container';
import './index.scss';

import Logo from '../Logo';

const Nav = ({ location }) => (
  <div className="nav">
    <Container>
      <div className="nav__wrapper">
        <div className="nav__links-container">
          <NavLink noFocus to="/">
            <Logo />
          </NavLink>
          <NavLink isActive={location.pathname.includes('/about')} title="About" to="/about" />
          <NavLink isActive={location.pathname.includes('/work')} title="Work" to="/work" />
          <NavLink isActive={location.pathname.includes('/blog')} title="Blog" to="/blog" />
        </div>
        <SocialLinks className="nav__social-link" />
      </div>
    </Container>
  </div>
);

export default Nav;
