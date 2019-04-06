module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Haezl`,
    author: {
      name: "gatsby starter haezl",
      image: "/img/me.png",
      biography:
        "Yet another gatsby starter with a mobile first approach, implementing a blogging site with infinite scroll.",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://twitter.com/gatsbyjs",
      "https://github.com/gatsbyjs/gatsby",
      "https://www.reddit.com/r/gatsbyjs/",
    ],
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
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
