import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/index-layout"
import BlogListElement from "../components/blog-list-element"

class Index extends React.Component<{ data: any }, { postsToShow: number }> {
  state = {
    postsToShow: 2,
  }
  ticking: boolean

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < 10) {
      this.setState({ postsToShow: this.state.postsToShow + 1 })
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
    const posts = this.props.data.allMarkdownRemark.edges.map(e => e.node)

    return (
      <Layout>
        <div style={{ minHeight: "50vh" }}>
          <h4>Newest Posts</h4>
          {posts.slice(0, this.state.postsToShow).map(node => (
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
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            cover {
              childImageSharp {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
