---
title: "gatsby plugins used by this starter"
date: "2019-04-10"
description: "A descriptive list of gatsby plugins used by this template. For each plugin a short overview, usage in this starter and a link to the plugins site is given."
---

## gatsby-plugin-tslint

Provides drop-in support for TSLint. By default it lints all `.ts` and `.tsx` files and excludes the `node_modules`, `.cache` and `public` folder.

A tslint.json file is setup in the root of this project to configure TSLint. It is based on rules recommended by `tslint-react` and `tslint-microsoft` and overrides some of those rules in a self-opinionated manner.

The linter is run either through the command `npm run tslint`, `npm run build` or may be picked up by the editor of your choice.

For further details take a look at [gatsby-plugin-tslint](https://www.gatsbyjs.org/packages/gatsby-plugin-tslint/)

## gatsby-plugin-typescript

Provides drop-in support for Typescript and TSX.

All components are written in TSX and Typescript and all Props have a Typescript interface definition. However, as query results of the graphql queries are unknown at transpile time those interfaces just serve as support for writting the conmponents. The typescript compiler will not throw errors if, for example, markdown files queried by graphql do not contain the fields marked as required by the interfaces.

For further details take a look at [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)

## gatsby-source-filesystem

Provides support for sourcing data into a Gatsby application from the local filesystem.

This plugin is used in conjunction with `gatsby-transformer-remark` in order to transform markdown files into `MarkdownRemark` nodes from which a HTML representation of the markdown can be queried.

For further details take a look at [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

## gatsby-transformer-remark

Plugin to parse markdown files. Uses [Remark](http://remark.js.org/ "Remark"). Can be configured to use further plugins in order to enhance the markdown when rendered.

In this starter those plugins are `gatsby-remark-autolink-headers`, `gatsby-remark-emoji-unicode`, `gatsby-remark-prismjs` and `gatsby-remark-images`.

For further details take a look at:

- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-autolink-headers](https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/)
- [gatsby-remark-emoji-unicode](https://www.gatsbyjs.org/packages/gatsby-remark-emoji-unicode/)
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
- [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)

## gatsby-remark-prismjs

Provides support for syntax higlighting of code blocks in markdown files. Uses [PrismJS](http://prismjs.com/ "PrismJS").

Requires to add a css file to the `gatsby-bowser.js` file, e.g.

```javascript
// gatsby-browser.js
require("prismjs/themes/prism-solarizedlight.css")
```

For further details take a look at [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

## gatsby-plugin-typography

Provides support for using a set of styles from [Typography](https://kyleamathews.github.io/typography.js/)

In order to configure one of the possible themes a `typography.ts` file is utilized. It is located in the `src/styles` folder.

This starter makes use of the FairyGates Theme.

For further details take a look at [gatsby-plugin-typography](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/)

## gatsby-transformer-sharp and gatsby-plugin-sharp

Parses images into a node of type ImageSharp and provides fields in their GraphQL types for processing those images.

For further details take a look at:

- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)

## gatsby-plugin-manifest

Provides drop-in support for shipping a manifest file in order to save the web application to smartphone home screens so it behaves similar to native apps.

For further details take a look at [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/)

## gatsby-plugin-offline

Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It creates a service worker for the site and loads the service worker into the client.

For further details take a look at [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)

Currently a `networkFirst` approach is used. For debugging purpose `onServiceWorkerUpdateReady` is registered in `gatsby-browser.js`.

## gatsby-plugin-material-ui

Provides drop-in support for Material UI and built-in server-side rendering. Uses [Material UI](https://github.com/mui-org/material-ui).

For a component demo and getting started guide see [material-ui.com](https://material-ui.com/getting-started/usage/)

For further details take a look at [gatsby-plugin-material-ui](https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/)
