import React from 'react';
import Link from 'gatsby-link';

import Flex from '../Flex';
import Container from '../Container';

import ProjectEntry from './ProjectEntry';

import './index.scss';

const PageIndex = () => {
  return (
    <div className="page-index">
      <Container>
        <Flex halign="center">
          <Flex className="page-index__flex">
            <div className="page-index__col">
              <h1 className="page-index__h1">Work</h1>
              <div>
                <ProjectEntry imgURl="http://via.placeholder.com/150x150" />
                <ProjectEntry imgURl="http://via.placeholder.com/150x150" />
                <ProjectEntry imgURl="http://via.placeholder.com/150x150" />
              </div>
            </div>
            <div className="page-index__col">
              <h1 className="page-index__h1">Blog Posts</h1>
              <div>
                <ProjectEntry />
                <ProjectEntry />
                <ProjectEntry />
                <ProjectEntry />
              </div>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default PageIndex;
