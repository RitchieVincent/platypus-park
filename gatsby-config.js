require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Platypus Park Riverside Retreat - Bundaberg Wedding Venue and Holiday Destination`,
    description: `A 50 acre organic farm on the Burnett River that offers a stunning venue for your country wedding as well as villa accommodation or camping facilities.`,
    author: `Ritchie Vincent`,
    siteUrl: `https://admin.platypusparkriversideretreat.com.au`,
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
        baseUrl: `admin.platypusparkriversideretreat.com.au`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        // auth: {
        //   htaccess_user: process.env.WP_USERNAME,
        //   htaccess_pass: process.env.WP_PASSWORD,
        //   htaccess_sendImmediately: false,
        // },
      },
    },
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
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: ["Libre Baskerville", "Nunito Sans:300,400,800"],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-60R98PEV8W`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}
