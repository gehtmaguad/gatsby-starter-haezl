import * as React from "react"
import Image, { FluidObject } from "gatsby-image"
import Card from "@material-ui/core/Card"

import THEME from "../../theme"
import FabButton from "../shared/FabButton"

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
  <Card style={{ padding: 50 }}>
    <h1 style={{ marginBottom: 30, marginTop: 0, textAlign: "center" }}>
      {title}
    </h1>
    {children}
  </Card>
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
    </div>
  )
}
