import * as React from "react"
import { withPrefix, Link } from "gatsby"

export default ({ author, minimized = false }) => {
  return minimized ? (
    <div style={{ marginLeft: 15, display: "inline" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontSize: 30,
            color: "white",
          }}
        >
          {author.name}
        </span>
      </Link>
    </div>
  ) : (
    <div style={{ textAlign: "center", marginLeft: 50, marginRight: 50 }}>
      <Link to="/">
        <img
          src={withPrefix(author.image)}
          style={{ borderRadius: "50%", minWidth: 80, marginBottom: 25 }}
          width="80"
          height="80"
          alt={author.name}
        />
      </Link>
      <h1
        style={{
          fontSize: 30,
          color: "white",
          marginBottom: 20,
        }}
      >
        {author.name}
      </h1>
      <p
        style={{
          fontSize: 20,
          color: "white",
          maxWidth: 500,
          margin: "auto",
          marginBottom: 20,
        }}
      >
        {author.biography}
      </p>
    </div>
  )
}
