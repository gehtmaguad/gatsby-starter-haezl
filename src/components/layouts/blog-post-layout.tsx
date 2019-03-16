import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Responsive from "react-responsive"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

export default ({ title, children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
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
          />
          <div
            style={{
              maxWidth: 650,
              margin: "0 auto",
              paddingTop: 40,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            {children}
          </div>
        </Default>
        <Mobile>
          <div style={{ marginTop: 10 }}>
            <div
              style={{
                maxWidth: 650,
                margin: "0 auto",
                paddingTop: 40,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <h1
                onClick={() => window.history.back()}
                style={{
                  display: "inline-block",
                  color: "#555",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {`< ${title}`}
              </h1>
              {children}
            </div>
          </div>
        </Mobile>
      </>
    )}
  />
)
