import React from 'react';

import Banner from '../components/Banner';

const Blah = () => (
  <div>
    <Banner height="small">
      <div>
        <h1 className="banner__h1">
          Blog
        </h1>
        <p className="banner__p">
          I write about web technologies and some random stuff
        </p>
      </div>
    </Banner>
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
