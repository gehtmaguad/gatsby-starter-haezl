import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Responsive from "react-responsive"

import { rhythm } from "../utils/typography"
import Author from "../components/author"
import Menu from "../components/menu"
import SocialNetworks from "../components/social-networks"

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
              paddingTop: 75,
              backgroundImage: "linear-gradient(20deg, #039be5, #26a69a)",
              paddingBottom: 75,
            }}
          >
            <Author author={data.site.siteMetadata.author} />
            <SocialNetworks networks={data.site.siteMetadata.networks} />
            <Menu />
          </div>
          <div
            id={"children"}
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
        </Default>
        <Mobile>
          <div
            style={{
              paddingTop: 50,
              backgroundImage: "linear-gradient(20deg, #039be5, #26a69a)",
              paddingBottom: 50,
            }}
          >
            <Author author={data.site.siteMetadata.author} />
            <SocialNetworks networks={data.site.siteMetadata.networks} />
            <Menu verticallyAligned={true} />
          </div>
          <div
            id={"children"}
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
        </Mobile>
      </>
    )}
  />
)
