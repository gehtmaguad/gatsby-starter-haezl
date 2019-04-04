import * as React from "react"
import { observer } from "mobx-react"
import { BlogPostStore } from "../stores/BlogPostStore"

import BlogListElement from "./blog-list-element"
import CONFIG from "../config"
import { FluidObject } from "gatsby-image"

interface IProps {
  posts: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
      description: string
      cover?: {
        childImageSharp?: {
          fluid: FluidObject | null
        }
      }
    }
  }[]
  store: BlogPostStore
}

@observer
class BlogList extends React.Component<IProps, {}> {
  ticking: boolean = false

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < CONFIG.offsetHeightToTriggerLoading) {
      this.props.store.add()
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
  }

  render() {
    return (
      <div style={{ minHeight: "50vh" }}>
        {this.props.posts.slice(0, this.props.store.postsToShow).map(node => (
          <div key={node.id}>
            <BlogListElement
              data={{
                slug: node.fields.slug,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                coverFluid:
                  node.frontmatter.cover &&
                  node.frontmatter.cover.childImageSharp
                    ? node.frontmatter.cover.childImageSharp.fluid
                    : null,
              }}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default BlogList
