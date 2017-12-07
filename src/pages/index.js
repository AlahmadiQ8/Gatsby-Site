import React from 'react';


import Banner from '../components/Banner';
import PageIndex from '../components/PageIndex';

const IndexPage = ({ data }) => (
  <div>
    <Banner />
    <PageIndex data={data} />
  </div>
);

export const pageQuery = graphql`
query AllBlogPostsPageQuery {
  allMarkdownRemark(
    filter: {id: {regex: "/blog/"}}
    sort: {fields: [fields___date], order: DESC}
    limit: 4
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

export default IndexPage;
