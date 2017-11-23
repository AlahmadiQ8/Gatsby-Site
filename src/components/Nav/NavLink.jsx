import Link from 'gatsby-link';
import React from 'react';
import cx from 'classnames';

const NavLink = ({ isActive, title, to }) => {
  const linkClasses = cx(
    'nav__link',
    {
      'nav__link--active': isActive,
    }
  );
  return (
    <Link className={linkClasses} to={to}>
      {title}
      {/* {isActive && <span css={activeAfterStyle} />} */}
    </Link>
  );
};

NavLink.defaultProps = {
  to: '#',
};

export default NavLink;
