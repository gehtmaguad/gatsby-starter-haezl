import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layouts/index-layout"

export default ({ data }) => {
  return (
    <Layout>
      <div style={{ minHeight: "50vh" }}>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <p style={{ color: "#777", margin: 0, fontSize: 18 }}>
                {node.frontmatter.date}
              </p>
              <h3 style={{ marginBottom: 5, marginTop: 2 }}>
                {node.frontmatter.title}
              </h3>
              <p
                style={{
                  color: "#777",
                  marginTop: 6,
                  textDecoration: "none",
                  fontSize: 18,
                }}
              >
                {node.frontmatter.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
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
