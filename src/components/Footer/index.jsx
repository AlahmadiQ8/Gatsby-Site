import React from 'react';
import Link from 'gatsby-link';

import './index.scss';
import Container from '../Container';
import Flex from '../Flex';
import SocialLinks from '../SocialLinks';


const Banner = props => (
  <footer>
    <div className="footer footer--dark">
      <Container>
        <div className="footer__content-wrapper">
          <Flex className="footer__row" halign="center">
            <Link className="footer__links" to="#">Home</Link>
            <Link className="footer__links" to="#">About</Link>
            <Link className="footer__links" to="#">Work</Link>
            <Link className="footer__links" to="#">Blog</Link>
          </Flex>
          {/* <hr className="footer__hr" /> */}
          <Flex className="footer__row" halign="center">
            <SocialLinks className="footer__social-links" />
          </Flex>
        </div>
      </Container>
    </div>
    {/* <div className="footer footer--light">
      <Container>
        <div className="footer__content-wrapper">
        </div>
      </Container>
    </div> */}
  </footer>
);

export default Banner;
