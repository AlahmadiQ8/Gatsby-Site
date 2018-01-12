import React from 'react';
import Link from 'gatsby-link';

import Banner from 'components/Banner';
import Thumbnail from 'components/Thumbnail';
import Container from 'components/Container';
import ButtonLink from 'components/ButtonLink';
import Flex from 'components/Flex';
import Entry from 'components/Entry';

import './index.scss';

const IndexPage = ({ data }) => (
  <div>
    <Banner>
      <div className="banner__section">
        <Thumbnail />
      </div>
      <div className="banner__section">
        <h1 className="banner__h1">Mohammad Alahmadi</h1>
        <p className="banner__p">
          I'm a software engineer focusing mostly on the front end side of the 
          web. I enjoy solving problems and making great web experiences for 
          people.
        </p>
      </div>
    </Banner>
    {/* <div className="page-index">
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
    </div> */}
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
