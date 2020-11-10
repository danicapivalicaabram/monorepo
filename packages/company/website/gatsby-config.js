module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-json',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
  ],
}