import React from 'react';
import Flex from 'components/Flex';
import { Clock } from 'components/icons';

const Meta = ({ date, className }) => {
  return (
    <div className={className}>
      <Flex direction="row" valign="center">
        <Clock size="20" color="#ececec" />
        <div style={{ marginLeft: '7px' }}>{date}</div>
      </Flex>
    </div>
  );
};

export default Meta;
