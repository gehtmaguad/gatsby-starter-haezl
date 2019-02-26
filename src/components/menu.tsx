import * as React from "react"
import { Link } from "gatsby"

export default () => (
  <nav>
    <ul style={{ textAlign: "center", listStyleType: "none" }}>
      <li>
        <Link
          to={`/`}
          style={{
            color: "#333",
            textAlign: "center",
          }}
        >
          Posts
        </Link>
      </li>
      <li>
        <Link
          to={`/about/`}
          style={{
            color: "#333",
            textAlign: "center",
          }}
        >
          About
        </Link>
      </li>
    </ul>
  </nav>
)
