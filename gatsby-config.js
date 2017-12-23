module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // eg <pre class="language-js">.
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: 'custom-block-danger',
                info: 'custom-block-info',
              },
            },
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
  ],
  pathPrefix: '/Gatsby-Site',
};
