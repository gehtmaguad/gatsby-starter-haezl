---
title: "Markdown Example"
date: "2019-04-09"
description: "This blog entry is meant to give an overview of Markdown syntax supported through currently installed plugins"
cover: "markdown.jpg"
---

## Content

- [Links](#links)
- [Headins](#headings)
- [Horizontal Rules](#horizontal-rules)
- [Emphasis](#emphasis)
- [Blockquotes](#blockquotes)
- [Lists](#lists)
  - [unordered](#unordered)
  - [ordered](#ordered)
- [Code](#code)
- [Tables](#tables)
- [Images](#images)
- [Unicode Emojies](#unicode-emojies)
- [Footnotes](#footnotes)

## Links

- **[Gatsby](https://www.gatsbyjs.org/ "Gatsby!")** - link to the gatsby webpage.

---

## Headings

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquote
>
> > nested Blockquote
> >
> > > Blockquote nested inside a nested Blockquote

## Lists

### unordered

- First element inside unordered list
- Second element inside unordered list
  - Subelement
  * Subelement with asterist
  - Subelement with plus
- Third element inside unordered list

### ordered

1. First element inside ordered list
2. Second element inside ordered list
3. Third element inside ordered list

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting for Javascript code

```javascript
var foo = function(bar) {
  return bar++
}

console.log(foo(5))
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

## Images

Inline-style:
![alt text](https://pbs.twimg.com/profile_images/875556871427375106/Xuq8DypK_bigger.jpg "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://pbs.twimg.com/profile_images/875556871427375106/Xuq8DypK_bigger.jpg "Logo Title Text 2"

Local Image:
![local image](./gatsby.jpg "local imgae")

Local Image via HTML with width applied:

<div style="width: 20px;"><img src="./gatsby.jpg" alt="Gatsby Logo" /></div>

### Unicode Emojies

:wink: :cry: :heart: :laughing: :yum:

### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].
