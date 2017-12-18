import React from 'react';

import Container from 'components/Container';
import Flex from 'components/Flex';
import Thumbnail from 'components/Thumbnail';
import './index.scss';

const Banner = () => (
  <div className="banner">
    <header className="banner__content-wrapper">
      <Container>
        <Flex halign="space-around" className="banner__flex">
          <div className="banner__section">
            <Thumbnail />
          </div>
          <div className="banner__section">
            <h1 className="banner__h1">Mohammad Alahmadi</h1>
            <p className="banner__p">
            I’m a front end engineer living in Santa Barbara. I enjoy building
            stuff with Javascript and React.
            </p>
          </div>
        </Flex>
      </Container>
    </header>
  </div>
);

export default Banner;
