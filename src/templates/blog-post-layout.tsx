import * as React from "react"
import { graphql, Link } from "gatsby"
import Responsive from "react-responsive"

import Author from "../components/author"
import SocialNetworks from "../components/social-networks"
import Menu from "../components/menu"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Default>
        <div
          style={{
            paddingTop: 5,
            backgroundImage: "linear-gradient(20deg, #039be5, #26a69a)",
            paddingBottom: 5,
            display: "flex",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              alignContent: "center",
            }}
          >
            <Author author={data.site.siteMetadata.author} minimized={true} />
            {/* <SocialNetworks
              networks={data.site.siteMetadata.networks}
              minimized={true}
            /> */}
          </div>
          <div style={{ marginLeft: "auto", paddingRight: 10 }}>
            <Menu minimized={true} />
          </div>
        </div>
      </Default>
      <Mobile>
        <div style={{ textAlign: "center", margin: 10 }}>
          <Link
            to={`/#children`}
            style={{
              display: "inline-block",
              borderRadius: 20,
              borderColor: "#aaa",
              borderWidth: 1,
              borderStyle: "solid",
              textAlign: "center",
              backgroundColor: "white",
              width: 150,
              height: 35,
              padding: 5,
              margin: 10,
              color: "#555",
              textDecoration: "none",
              fontSize: 18,
            }}
          >
            All Posts
          </Link>
        </div>
      </Mobile>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
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
    site {
      siteMetadata {
        title
        author {
          name
          image
          biography
        }
        networks
      }
    }
  }
`
