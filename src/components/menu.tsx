import * as React from "react"
import { Link } from "gatsby"

export default props => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        textAlign: "center",
        display: props.verticallyAligned ? "block" : "inline-block",
      }}
    >
      <a
        href={`#children`}
        style={{
          display: "inline-block",
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "white",
          width: 150,
          height: 50,
          padding: 10,
          margin: 10,
          color: "#00bcd4",
          textDecoration: "none",
        }}
      >
        Posts
      </a>
    </div>
    <div
      style={{
        textAlign: "center",
        display: props.verticallyAligned ? "block" : "inline-block",
      }}
    >
      <Link
        to={`/about/`}
        style={{
          display: "inline-block",
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "white",
          width: 150,
          height: 50,
          padding: 10,
          margin: 10,
          color: "#00bcd4",
          textDecoration: "none",
        }}
      >
        About
      </Link>
    </div>
  </div>
)
