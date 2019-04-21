---
title: "Get started"
date: "2019-04-11"
description: "This blog entry is meant to provide a Readme on how to get up and running with this gatsby starter"
cover: "ideas-start-here.jpg"
---

## Quick Start

Follow the Quick Start instructions outlined in the **[README](https://github.com/haezl/gatsby-starter-haezl "README.md")** in the root of the project.

## Add blog posts

Blog Posts are stored in seperate subfolders under `src/pages/posts`.

In order to create a new post navigate to `src/pages/posts` and:

- Create a new subfolder
- Create a markdown file (e.g. your-file.md)
- Optionally copy a header image to the subfolder
- Optionally copy further images you want to use in your blog post to the subfolder
- In your markdown file, add your HTML or plain text content (for a reference take a look at the markdown blog post)
- In your markdown file, add the following header. (Note that the cover is optionally):

```
---
title: "Your title"
date: "2019-04-30"
description: "Your description"
cover: "your-optionally-header-image.jpg"
---
```

## Index page

In order to change the content displayed in the header section of the index page update the site metadata in `gatsby-config.ts` located in the root of this project and copy your image into `static/img` folder.

The look and feel can be changed as described in [Theming](#theming)

## About page

## Theming

In order to change the look and feel of the blog you can configure specific settings in `theme.ts` located in the `src` folder of this project.
