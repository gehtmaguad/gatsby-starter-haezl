import * as React from "react"
import { Link } from "gatsby"

export default ({ data }) => (
  <Link
    to={data.slug}
    style={{
      textDecoration: "none",
      color: "inherit",
    }}
  >
    <p style={{ color: "#777", margin: 0, fontSize: 18 }}>{data.date}</p>
    <h3 style={{ marginBottom: 5, marginTop: 2 }}>{data.title}</h3>
    <p
      style={{
        color: "#777",
        marginTop: 6,
        textDecoration: "none",
        fontSize: 18,
      }}
    >
      {data.description}
    </p>
  </Link>
)
