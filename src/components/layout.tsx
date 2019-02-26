import * as React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Author from "../components/author"
import Menu from "../components/menu"
import SocialNetworks from "../components/socialNetworks"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => (
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            padding: rhythm(1.5),
            paddingTop: rhythm(1),
            width: 350,
          }}
        >
          <Author author={data.site.siteMetadata.author} />
          <Menu />
          <SocialNetworks networks={data.site.siteMetadata.networks} />
        </div>
        <div
          style={{
            flexGrow: 1,
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
      </div>
    )}
  />
)
