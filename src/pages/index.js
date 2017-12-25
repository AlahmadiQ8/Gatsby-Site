import React from 'react';


import Banner from '../components/Banner';
import PageIndex from '../components/PageIndex';
import Thumbnail from '../components/Thumbnail';

const IndexPage = ({ data }) => (
  <div>
    <Banner>
      <div className="banner__section">
        <Thumbnail />
      </div>
      <div className="banner__section">
        <h1 className="banner__h1">Mohammad Alahmadi</h1>
        <p className="banner__p">
        I’m a front end engineer living in Santa Barbara. I enjoy building
        stuff with Javascript and React.
        </p>
      </div>
    </Banner>
    <PageIndex data={data} />
  </div>
);

export const pageQuery = graphql`
query RecentBlogPostsPageQuery {
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
