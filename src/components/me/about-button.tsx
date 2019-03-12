import * as React from "react"
import { Link } from "gatsby"

export default () => (
  <div
    style={{
      textAlign: "center",
      display: "inline-block",
    }}
  >
    <Link
      to={`/about/`}
      style={{
        display: "inline-block",
        borderRadius: 3,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        textAlign: "center",
        width: 150,
        padding: 7,
        margin: 15,
        backgroundColor: "transparent",
        color: "white",
        textDecoration: "none",
      }}
    >
      About
    </Link>
  </div>
)
