import * as React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import THEME from "../../theme"

export default () => (
  <div style={{ textAlign: "right" }}>
    <Link to={`/about/`} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        style={{
          marginRight: 30,
          marginTop: 30,
          color: THEME.index.aboutButton.color,
          borderColor: THEME.index.aboutButton.borderColor,
          backgroundColor: THEME.index.aboutButton.backgroundColor,
          textTransform: "none",
          width: THEME.index.aboutButton.width,
        }}
      >
        About
      </Button>
    </Link>
  </div>
)
