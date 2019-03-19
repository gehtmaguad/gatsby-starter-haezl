import * as React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

export default () => (
  <div style={{ textAlign: "right" }}>
    <Link to={`/about/`} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        style={{
          marginRight: 30,
          marginTop: 30,
          color: "white",
          borderColor: "white",
          textTransform: "none",
          width: 100,
        }}
      >
        About
      </Button>
    </Link>
  </div>
)
