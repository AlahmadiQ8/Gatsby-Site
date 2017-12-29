import React from 'react';

import Banner from 'components/Banner';
import Flex from 'components/Flex';
import Container from 'components/Container';
import Entry from 'components/PageIndex/Entry';

const Blah = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <Banner height="small">
      <div>
        <h1 className="banner__h1">Blog</h1>
        <p className="banner__p">
          I write about web technologies and some random stuff
        </p>
      </div>
    </Banner>

    <div className="page-index" style={{ height: '100%' }}>
      <Container>
        <div style={{ maxWidth: '700px' }} className="margin-auto">
          {edges.map(({ node: { frontmatter, fields } }) => (
            <Entry
              key={fields.slug}
              to={fields.slug}
              title={frontmatter.title}
              date={fields.date}
              small
            />
          ))}
        </div>
      </Container>
    </div>
  </div>
);

export const pageQuery = graphql`
  query AllBlogPostsPageQuery {
    allMarkdownRemark(
      filter: { id: { regex: "/blog/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

export default Blah;
