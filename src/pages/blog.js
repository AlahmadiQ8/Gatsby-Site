import React from 'react';

const Blah = () => {
  return <div />;
};

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
