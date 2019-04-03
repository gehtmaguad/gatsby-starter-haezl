import * as React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import CONFIG from "../../config"

export default () => (
  <div style={{ textAlign: "right" }}>
    <Link to={`/about/`} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        style={{
          marginRight: 30,
          marginTop: 30,
          color: CONFIG.index.aboutButton.color,
          borderColor: CONFIG.index.aboutButton.borderColor,
          backgroundColor: CONFIG.index.aboutButton.backgroundColor,
          textTransform: "none",
          width: CONFIG.index.aboutButton.width,
        }}
      >
        About
      </Button>
    </Link>
  </div>
)
