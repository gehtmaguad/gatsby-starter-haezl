import * as React from "react"
import { graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import Responsive from "react-responsive"
import FabButton from "../components/shared/FabButton"

import THEME from "../theme"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const ContentArea = ({ data }: any) => (
  <Card style={{ padding: 50 }}>
    <h1
      style={{
        marginBottom: 30,
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "center",
      }}
    >
      About {data.site.siteMetadata.title}
    </h1>
    {
      // tslint:disable:react-no-dangerous-html
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} />
      // tslint:enable:react-no-dangerous-html
    }
  </Card>
)

const HeaderArea = () => {
  const goBack = () => window.history.back()

  return <FabButton onClickHandler={goBack} />
}

export default ({ data }: any) => (
  <>
    <Default>
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
          <HeaderArea />
          <ContentArea data={data} />
        </div>
      </div>
    </Default>
    <Mobile>
      <HeaderArea />
      <ContentArea data={data} />
    </Mobile>
  </>
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
