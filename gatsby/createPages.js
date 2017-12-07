// Most of the configurations here are copies from
// https://github.com/reactjs/reactjs.org/blob/master/gatsby/createPages.js

const { resolve } = require('path');

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {};

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const blogTemplate = resolve(__dirname, '../src/templates/blog.js');

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                redirect
                slug
              }
            }
          }
        }
      }
    `
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields;

    let template;
    if (slug.includes('blog/')) {
      template = blogTemplate;
    }

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    });

    // Register redirects as well if the markdown specifies them.
    if (edge.node.fields.redirect) {
      let redirect = JSON.parse(edge.node.fields.redirect);
      if (!Array.isArray(redirect)) {
        redirect = [redirect];
      }

      redirect.forEach(fromPath => {
        if (redirectToSlugMap[fromPath] != null) {
          console.error(
            `Duplicate redirect detected from "${fromPath}" to:\n` +
              `* ${redirectToSlugMap[fromPath]}\n` +
              `* ${slug}\n`
          );
          process.exit(1);
        }

        // A leading "/" is required for redirects to work,
        // But multiple leading "/" will break redirects.
        // For more context see github.com/reactjs/reactjs.org/pull/194
        const toPath = slug.startsWith('/') ? slug : `/${slug}`;

        redirectToSlugMap[fromPath] = slug;
        createRedirect({
          fromPath: `/${fromPath}`,
          redirectInBrowser: true,
          toPath,
        });
      });
    }
  });
};
