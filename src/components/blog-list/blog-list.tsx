import * as React from "react"
import { observer } from "mobx-react"
import blogPostStore from "../../stores/BlogPostStore"
import Responsive from "react-responsive"
import ShowMoreButton from "./show-more-button"

import BlogListElement from "./blog-list-element"
import CONFIG from "../../config"
import { FluidObject } from "gatsby-image"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

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
  totalCount: number
}

/* 
  Desktop version automatically extends blog list 
  as soon as user scrolls near the bottom
*/
@observer
class BlogListDesktop extends React.Component<IProps, {}> {
  ticking: boolean = false

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < CONFIG.offsetHeightToTriggerLoading) {
      blogPostStore.add()
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
        {this.props.posts.slice(0, blogPostStore.postsToShow).map(node => (
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

/* 
  Mobile version extends blog list as soon as user clicks 
  on a "LoadMore" button at the end of the list
*/
@observer
class BlogListMobile extends React.Component<IProps, {}> {
  handleUpdate = () => {
    blogPostStore.add()
  }

  render() {
    return (
      <div style={{ minHeight: "50vh" }}>
        {this.props.posts.slice(0, blogPostStore.postsToShow).map(node => (
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
        {this.props.totalCount > blogPostStore.postsToShow && (
          <ShowMoreButton onClickHandler={this.handleUpdate} />
        )}
      </div>
    )
  }
}

const BlogList = (props: IProps) => (
  <>
    <Default>
      <BlogListDesktop posts={props.posts} totalCount={props.totalCount} />
    </Default>
    <Mobile>
      <BlogListMobile posts={props.posts} totalCount={props.totalCount} />
    </Mobile>
  </>
)

export default BlogList
