import React from 'react';

import './index.scss';

const Flex = ({
  direction = 'row',
  halign = 'flex-start',
  valign = 'flex-start',
  className = '',
  children,
}) => {
  const styles = {
    flexDirection: direction,
    justifyContent: direction === 'row' ? halign : valign,
    alignItems: direction === 'row' ? valign : halign,
  };
  return (
    <div
      className={`flex ${className}`}
      style={className.match(/flex/) ? {} : styles}
    >
      {children}
    </div>
  );
};

export default Flex;
