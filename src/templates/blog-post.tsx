import * as React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>Link back</h1>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
