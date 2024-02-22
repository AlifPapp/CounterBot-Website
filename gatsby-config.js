/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Counter`,
    siteUrl: `https://counterbot.xyz`,
    pathPrefix: '/',
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    'gatsby-plugin-cname',
    {
      resolve: 'gatsby-plugin-cname',
      options: {
        hostname: `counterbot.xyz`,
      }
    }
  ]
};

