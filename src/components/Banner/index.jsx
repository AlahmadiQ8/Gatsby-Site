import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Flex from 'components/Flex';
import './index.scss';

const Banner = ({ children, height }) => {
  const justifyContent = React.Children.count(children) > 1 ? 'space-around' : 'start'; 
  const style = { justifyContent };
  return (
    <div className="banner">
      <header className={`banner__content-wrapper banner__content-wrapper--${height}`}>
        <Container>
          <Flex style={style} className="banner__flex">
            {children}
          </Flex>
        </Container>
      </header>
    </div>
  );
};

Banner.defaultProps = {
  height: 'large',
};

Banner.propTypes = {
  height: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default Banner;
