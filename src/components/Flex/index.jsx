import { createElement } from 'react';

import './index.scss';

const Flex = ({
  direction = 'row',
  halign = 'flex-start',
  valign = 'flex-start',
  className = '',
  grow = 0,
  shrink = 1,
  type = 'div',
  children,
}) => {
  const styles = {
    flexGrow: grow,
    flexShrink: shrink,
    flexDirection: direction,
    justifyContent: direction === 'row' ? halign : valign,
    alignItems: direction === 'row' ? valign : halign,
  };

  return createElement(
    type,
    {
      className: `flex ${className}`,
      style: className.match(/flex/) ? {} : styles,
    },
    children
  );
};

export default Flex;
