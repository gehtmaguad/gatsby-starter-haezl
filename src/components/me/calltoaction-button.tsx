import * as React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ textAlign: "center", marginTop: 40 }}>
    <Link to={`#children`}>
      <span style={{ padding: 10 }}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="white"
        >
          <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
        </svg>
      </span>
    </Link>
  </div>
)
