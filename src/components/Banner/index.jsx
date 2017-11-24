import React from 'react';
import './index.scss';

import Container from '../Container';
import Flex from '../Flex';

import thumbnail from './thumbnail.jpg';

const Banner = props => (
  <div className="banner">
    <header className="banner__content-wrapper">
      <Container>
        <Flex halign="space-around" className="banner__flex">
          <div className="banner__col">
            <h1 className="banner__h1">Mohammad Alahmadi</h1>
            <p className="banner__p">
              I’m a front end developer living in Santa Barbara. I am passionate 
              about front end UI design, architecture, and web technologies. 
              I love building websites, SPAs, and fiddling with open source 
              projects. 
            </p>
          </div>
          <div className="banner__col banner__col--first">
            <img className="banner__thumbnail" src={thumbnail} alt="Thumbnail" />
          </div>
        </Flex>
      </Container>
    </header>
  </div>
);

export default Banner;
