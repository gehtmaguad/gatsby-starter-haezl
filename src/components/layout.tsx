import * as React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 700,
          padding: rhythm(2),
          paddingTop: rhythm(1.5),
        }}
      >
        <Link to={`/`}>
          <h3
            style={{
              marginBottom: rhythm(2),
              display: "inline-block",
              fontStyle: "normal",
            }}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          style={{
            float: "right",
          }}
        >
          About
        </Link>
        {children}
      </div>
    )}
  />
)
