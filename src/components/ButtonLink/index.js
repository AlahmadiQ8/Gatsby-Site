import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import './index.scss';

const ButtonLink = ({ children, size, className, width, outline, fullWidthOnXs, ...rest }) => {
  const classes = cx(
    'button-link',
    `button-link--${size}`,
    { [`button-link--${width}`]: width },
    { 'button-link--outline': outline },
    { 'button-link--fullWidth-on-xs': fullWidthOnXs },
    className
  );
  return (
    <Link {...rest}>
      <div className={classes}>{children}</div>
    </Link>
  );
};

ButtonLink.defaultProps = {
  size: 'medium',
  fullWidthOnXs: true,
};

export default ButtonLink;
