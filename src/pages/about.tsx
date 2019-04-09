import * as React from "react"
import { graphql } from "gatsby"
import Card from "@material-ui/core/Card"

import THEME from "../theme"

export default ({ data }: any) => (
  <div
    style={{
      backgroundColor: THEME.aboutPage.layout.backgroundColor,
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        maxWidth: THEME.aboutPage.layout.cardMaxWidth,
        margin: "0 auto",
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40,
      }}
    >
      <Card style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, marginTop: 0, textAlign: "center" }}>
          About {data.site.siteMetadata.title}
        </h1>
        {
          // tslint:disable:react-no-dangerous-html
          <div
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }}
          />
          // tslint:enable:react-no-dangerous-html
        }
      </Card>
    </div>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        about
      }
    }
  }
`
