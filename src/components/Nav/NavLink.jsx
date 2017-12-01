import Link from 'gatsby-link';
import React from 'react';
import cx from 'classnames';

const NavLink = ({ isActive, title, to, noFocus, children }) => {
  const linkClasses = cx(
    'nav__link',
    {
      'nav__link--active': isActive,
      'nav__link--no-focus': noFocus,
    }
  );
  return (
    <Link className={linkClasses} to={to}>
      {title}
      {children}
      {/* {isActive && <span css={activeAfterStyle} />} */}
    </Link>
  );
};

NavLink.defaultProps = {
  title: '',
  to: '#',
  noFocus: false,
};

export default NavLink;
