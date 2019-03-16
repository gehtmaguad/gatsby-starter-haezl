module.exports = {
  siteMetadata: {
    title: `Pandas eating Lots`,
    author: {
      name: "Gatsby.js",
      image: "/img/me.png",
      biography:
        "Welcome to Gatsby! Enjoy the power of the latest web technologies – React.js , Webpack , modern JavaScript and CSS and more — all set up and waiting for you to start building.",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://twitter.com/gatsbyjs",
      "https://github.com/gatsbyjs/gatsby",
      "https://www.reddit.com/r/gatsbyjs/",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "test123",
        short_name: "title 123",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#F7A046",
        display: "standalone",
        icon: "static/favicon.ico",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#0c9ed1",
        },
      },
    },
  ],
  pathPrefix: "/img",
}
