require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Platypus Park Riverside Retreat - Bundaberg Wedding Venue and Holiday Destination`,
    description: `A 50 acre organic farm on the Burnett River that offers a stunning venue for your country wedding as well as villa accommodation or camping facilities.`,
    author: `Ritchie Vincent`,
    siteUrl: `http://178.62.73.143`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `178.62.73.143`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        // auth: {
        //   htaccess_user: process.env.WP_USERNAME,
        //   htaccess_pass: process.env.WP_PASSWORD,
        //   htaccess_sendImmediately: false,
        // },
      },
    },
    // {
    //   resolve: `gatsby-wordpress-gutenberg`,
    //   options: {
    //     baseUrl: `wpprr.local`,
    //     https: false,
    //     // includedTypes: ["wordpress__POST", "wordpress__PAGE"], // Nodes that contain Gutenberg blocks to transform - optional
    //     // excludedBlocks: [], // Blocks to exclude - optional
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Libre Baskerville`,
          },
          {
            family: `Nunito Sans`,
            variants: [`300`, `400`, `800`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5,
        once: true,
        disable: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
