import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/blog-list-layout"
import BlogListElement from "../components/blog-list-element"

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = (this.props as any).pageContext
    const previousPage = currentPage === 1 ? null : `blog/${currentPage - 1}`
    const nextPage = currentPage === numPages ? null : `blog/${currentPage + 1}`

    const posts = (this.props as any).data.allMarkdownRemark.edges
    return (
      <Layout>
        {posts.map(({ node }) => (
          <div key={node.id}>
            <BlogListElement
              data={{
                slug: node.fields.slug,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
              }}
            />
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {previousPage ? (
            <Link style={{ fontSize: 26 }} to={previousPage}>
              Previous
            </Link>
          ) : (
            <span style={{ fontSize: 26, color: "#888" }}>Previous</span>
          )}
          {nextPage ? (
            <Link style={{ fontSize: 26 }} to={nextPage}>
              Next
            </Link>
          ) : (
            <span style={{ fontSize: 26, color: "#888" }}>Next</span>
          )}
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
        }
      }
    }
  }
`
