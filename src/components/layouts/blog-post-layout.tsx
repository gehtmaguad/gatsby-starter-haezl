import * as React from "react"
import Responsive from "react-responsive"
import Image from "gatsby-image"

import Card from "@material-ui/core/Card"
import Fab from "@material-ui/core/Fab"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const ContentArea = ({ title, children }) => (
  <Card style={{ padding: 50 }}>
    <h1 style={{ marginBottom: 30, textAlign: "center" }}>{title}</h1>
    {children}
  </Card>
)

export default ({ title, cover, children }) => (
  <div style={{ backgroundColor: "#eeeeee" }}>
    <Default>
      <div
        style={{
          maxWidth: 750,
          margin: "0 auto",
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        <Fab
          style={{
            position: "absolute",
            marginTop: 20,
            marginLeft: 20,
            zIndex: 50,
            color: "#059ce2",
            backgroundColor: "white",
          }}
          color="primary"
          aria-label="Add"
          onClick={() => window.history.back()}
        >
          <ArrowBackIcon />
        </Fab>
        {cover ? <Image fluid={cover} /> : null}
        <ContentArea title={title}>{children}</ContentArea>
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
  </div>
)
