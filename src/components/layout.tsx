import * as React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Responsive from "react-responsive"

import { rhythm } from "../utils/typography"
import Author from "../components/author"
import Menu from "../components/menu"
import SocialNetworks from "../components/socialNetworks"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

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
      <>
        <Default>
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
              {children}
            </div>
          </div>
        </Default>
        <Mobile>
          <div>
            <div
              style={{
                padding: rhythm(1.5),
                paddingTop: rhythm(1),
              }}
            >
              <Author author={data.site.siteMetadata.author} />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-around",
                }}
              >
                <Menu />
                <SocialNetworks networks={data.site.siteMetadata.networks} />
              </div>
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
              {children}
            </div>
          </div>
        </Mobile>
      </>
    )}
  />
)
