import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Responsive from "react-responsive"

import Author from "../me/author"
import Menu from "../me/menu"
import { rhythm } from "../../utils/typography"

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
            </div>
            <div style={{ marginLeft: "auto", paddingRight: 10 }}>
              <Menu minimized={true} hideAllPostsButton={true} />
            </div>
          </div>
        </Default>
        <Mobile>
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <a
              onClick={() => window.history.back()}
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
                marginTop: 10,
                color: "#555",
                textDecoration: "none",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              Back
            </a>
          </div>
        </Mobile>
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
      </>
    )}
  />
)
