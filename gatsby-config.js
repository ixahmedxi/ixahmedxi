module.exports = {
  siteMetadata: {
    title: `Ahmed Elsakaan`,
    description: `Full stack web developer and computer science student, passionate about making highly performant, accessible and responsive websites.`,
    author: `@ixahmedxii`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-86664929-8',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://ixahmedxi.us17.list-manage.com/subscribe/post?u=9d034f3d379f9c09974dcf622&amp;id=9574f95ef1',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#F4A261`,
        showSpinner: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#eeeeee`,
        theme_color: `#F4A261`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.svg`,
      },
    },
  ],
}
