import React from 'react';

import MarkdownPage from 'components/MarkdownPage';

const Blog = ({ data, location }) => {
  // TODO: below snippet is copied from fb. need to find a way to solve this
  // HACK The injected location prop doesn't update when hash changes
  // This might be a gatsby issue, or a react-router/history issue,
  // Or we might be using either library incorrectly.
  // For now this patch keeps the hash in sync by JIT copying it from window.
  // The undefined check prevents us from breaking on production build.
  if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
    location.hash = window.location.hash;
  }
  return (
    <MarkdownPage
      enableScrollSync
      // createLink={createLinkTutorial}
      date={data.markdownRemark.fields.date}
      location={location}
      markdownRemark={data.markdownRemark}
      // sectionList={sectionListTutorial}
    />
  );
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

export default Blog;
