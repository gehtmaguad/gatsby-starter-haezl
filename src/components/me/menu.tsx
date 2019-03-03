import * as React from "react"
import { Link } from "gatsby"

export default ({
  verticallyAligned = false,
  minimized = false,
  hideAllPostsButton = false,
}) => (
  <div
    style={{
      textAlign: "center",
      display: minimized ? "inline-block" : "block",
    }}
  >
    {hideAllPostsButton ? null : (
      <div
        style={{
          display: verticallyAligned ? "block" : "inline-block",
        }}
      >
        <Link
          to={`/#children`}
          style={{
            display: "inline-block",
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "white",
            width: minimized ? 100 : 150,
            height: minimized ? 35 : 50,
            padding: minimized ? 3 : 10,
            margin: minimized ? 3 : 10,
            color: "#00bcd4",
            textDecoration: "none",
          }}
        >
          Posts
        </Link>
      </div>
    )}
    <div
      style={{
        textAlign: "center",
        display: verticallyAligned ? "block" : "inline-block",
      }}
    >
      <Link
        to={`/about/`}
        style={{
          display: "inline-block",
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "white",
          width: minimized ? 100 : 150,
          height: minimized ? 35 : 50,
          padding: minimized ? 3 : 10,
          margin: minimized ? 5 : 10,
          color: "#00bcd4",
          textDecoration: "none",
        }}
      >
        About
      </Link>
    </div>
  </div>
)
