import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/blog-post-layout"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log("DATA IS: ", data)
  return (
    <Layout>
      <div
        style={{
          maxWidth: 650,
          margin: "0 auto",
          paddingTop: 40,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
