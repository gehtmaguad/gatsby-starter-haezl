import * as React from "react"
import Button from "@material-ui/core/Button"
import THEME from "../../theme"

export default ({ onClickHandler }) => (
  <div style={{ textAlign: "center" }}>
    <Button
      onClick={onClickHandler}
      style={{
        color: THEME.blogPost.showMoreButton.color,
        borderColor: THEME.blogPost.showMoreButton.borderColor,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: THEME.blogPost.showMoreButton.backgroundColor,
        textTransform: "none",
        width: THEME.blogPost.showMoreButton.width,
      }}
    >
      Load More
    </Button>
  </div>
)
