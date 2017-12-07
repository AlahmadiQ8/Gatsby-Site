import React from 'react';

const Blog = ({ data }) => {
  console.log(data);
  return <div />;
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TemplateBlogMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 500)
      frontmatter {
        title
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`;

// allMarkdownRemark(
//   limit: 10
//   filter: {id: {regex: "/blog/"}}
//   sort: {fields: [fields___date], order: DESC}
// ) {
//   edges {
//     node {
//       frontmatter {
//         title
//       }
//       fields {
//         slug
//       }
//     }
//   }
// }

export default Blog;
