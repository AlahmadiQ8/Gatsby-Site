// Credit goes to facebook react documentation site
// https://github.com/reactjs/reactjs.org/blob/master/gatsby/onCreateNode.js

// Parse date information out of blog post filename.
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

// Add custom fields to MarkdownRemark nodes.
module.exports = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const { permalink, redirect_from } = node.frontmatter;
    const { relativePath } = getNode(node.parent);

    // console.log(`\npermalink = ${permalink}`);
    // console.log(`redirect_from = ${redirect_from}`);
    // console.log(`relativePath = ${relativePath}`);

    let slug = permalink;

    if (!slug) {
      if (relativePath.includes('blog')) {
        const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const filename = match[4];
        if (!year || !month || !day || !filename) {
          throw Error(
            `blog markdown filename format is incorrect: ${relativePath}`
          );
        }

        slug = `/blog/${year}/${month}/${day}/${filename}`;

        const date = new Date(year, month - 1, day);

        // Blog posts are sorted by date and display the date in their header.
        createNodeField({
          node,
          name: 'date',
          value: date.toJSON(),
        });
      }
    }

    if (!slug) {
      slug = `/${relativePath.replace('.md', '')}`;
      // This should only happen for the partials in /content/home,
      // But let's log it in case it happens for other files also.
      console.warn(
        `Warning: No slug found for "${relativePath}".` +
          `Falling back to default "${slug}".`
      );
    }

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // Used by createPages() above to register redirects.
    createNodeField({
      node,
      name: 'redirect',
      value: redirect_from ? JSON.stringify(redirect_from) : '',
    });
  }
};
