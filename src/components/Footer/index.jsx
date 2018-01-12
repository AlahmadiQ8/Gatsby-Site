import React from 'react';
import Link from 'gatsby-link';

import Container from 'components/Container';
import Flex from 'components/Flex';
import SocialLinks from 'components/SocialLinks';

import './index.scss';

const Banner = props => (
  <footer>
    <div className="footer footer--dark">
      <Container>
        <div className="footer__content-wrapper">
          {/* <Flex className="footer__row" halign="center">
            <Link className="footer__links" to="#">Home</Link>
            <Link className="footer__links" to="#">About</Link>
            <Link className="footer__links" to="#">Work</Link>
            <Link className="footer__links" to="#">Blog</Link>
          </Flex> */}
          {/* <hr className="footer__hr" /> */}
          <Flex className="footer__row" halign="center">
            <SocialLinks className="footer__social-links" />
          </Flex>
        </div>
        <Flex halign="center" className="footer__copyright">
          <small>© 2018 Mohammad Alahmadi. All Rights Reserved.</small>
        </Flex>
      </Container>
    </div>
  </footer>
);

export default Banner;
