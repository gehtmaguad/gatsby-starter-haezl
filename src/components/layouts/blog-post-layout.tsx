import * as React from "react"
import Image, { FluidObject } from "gatsby-image"
import Card from "@material-ui/core/Card"
import Responsive from "react-responsive"

import THEME from "../../theme"
import FabButton from "../shared/FabButton"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

interface IContentAreaProps {
  children: React.ReactNode
  title: string
}

interface IHeaderArea {
  cover: FluidObject
}

interface IBlogPostLayout {
  children: React.ReactNode
  title: string
  cover: FluidObject
}

const ContentArea = ({ title, children }: IContentAreaProps) => (
  <>
    <Default>
      <Card style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, marginTop: 0, textAlign: "center" }}>
          {title}
        </h1>
        {children}
      </Card>
    </Default>
    <Mobile>
      <Card style={{ padding: 15 }}>
        <h1
          style={{
            marginBottom: 30,
            marginTop: 0,
            marginLeft: 70,
            marginRight: 70,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        {children}
      </Card>
    </Mobile>
  </>
)

const HeaderArea = ({ cover }: IHeaderArea) => {
  const goBack = () => window.history.back()

  return (
    <>
      <FabButton onClickHandler={goBack} />
      <div style={{ height: "auto", width: "auto" }}>
        {cover ? <Image fluid={cover} /> : null}
      </div>
    </>
  )
}

export default ({ title, cover, children }: IBlogPostLayout) => {
  return (
    <div style={{ backgroundColor: THEME.blogPost.layout.backgroundColor }}>
      <Default>
        <div
          style={{
            maxWidth: THEME.blogPost.layout.cardMaxWidth,
            margin: "0 auto",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
          }}
        >
          <HeaderArea cover={cover} />
          <ContentArea title={title}>{children}</ContentArea>
        </div>
      </Default>
      <Mobile>
        <HeaderArea cover={cover} />
        <ContentArea title={title}>{children}</ContentArea>
      </Mobile>
    </div>
  )
}
