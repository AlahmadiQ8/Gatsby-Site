import React from 'react';
import Link from 'gatsby-link';

import Flex from '../Flex';
import Container from '../Container';
import ButtonLink from '../ButtonLink';

import Entry from './Entry';

import './index.scss';

const PageIndex = ({ data }) => {
  return (
    <div className="page-index">
      <Container>
        <Flex halign="center">
          <Flex className="page-index__flex">
            <div className="page-index__col">
              <h1 className="page-index__h1">Work</h1>
              <div>
                <Entry imgURl="http://via.placeholder.com/150x150" />
                <Entry imgURl="http://via.placeholder.com/150x150" />
                <Entry imgURl="http://via.placeholder.com/150x150" />
              </div>
            </div>
            <div className="page-index__col">
              <h1 className="page-index__h1">Latest Posts</h1>
              <div className="entry__posts">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Link className="entry__h2 entry__h2--small"
                    key={node.fields.slug}
                    to={node.fields.slug}
                  >
                    {node.frontmatter.title}
                  </Link>
                ))}
                <ButtonLink to="/blog/all" size="small" width="wide" outline>
                  All Posts
                </ButtonLink>
              </div>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default PageIndex;
