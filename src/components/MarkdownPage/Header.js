import React from 'react';
import Flex from 'components/Flex';

const Header = ({ title, className }) => {
  return (
    <Flex type="header" halign="space-between" valign="baseline">
      <h1 className={className}>
        {title}
      </h1>
    </Flex>
  );
};

export default Header;
