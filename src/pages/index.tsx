import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/index-layout"
import BlogList from "../components/blog-list"
import blogPostStore from "../stores/BlogPostStore"
import { number } from "prop-types"
import { FluidObject } from "gatsby-image"

interface IIndex {
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
            description: string
            cover: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        }
      }
    }
  }
}

class Index extends React.Component<{ data: any }> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges.map(
      (e: any) => e.node
    )

    return (
      <Layout>
        <BlogList posts={posts} store={blogPostStore} />
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
