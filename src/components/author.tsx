import * as React from "react"
import { withPrefix, Link } from "gatsby"

export default ({ author }) => (
  <div>
    <div style={{ textAlign: "center" }}>
      <Link to="/">
        <img
          src={withPrefix(author.image)}
          style={{ borderRadius: "50%", minWidth: 65, marginBottom: 15 }}
          width="65"
          height="65"
          alt={author.name}
        />
      </Link>
    </div>
    <h1 style={{ fontSize: 20, color: "#333", textAlign: "center" }}>
      {author.name}
    </h1>
    <p
      style={{
        fontSize: 18,
        color: "#777",
        textAlign: "justify",
      }}
    >
      {author.biography}
    </p>
  </div>
)
