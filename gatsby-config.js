module.exports = {
  siteMetadata: {
    title: 'Addressr',
    author: 'Mountain Pass',
    description: 'Australian Address Validation and Autocomplete',
    siteUrl: `https://addressr.mountain-pass.com.au/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/callback'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/addressr-square.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-118656795-1', // Google Analytics / GA
          'AW-1028974242', // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
      // options: {
      //   excludedPaths: [],
      // },
    },
  ],
};
