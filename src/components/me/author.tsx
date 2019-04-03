import * as React from "react"
import { withPrefix, Link } from "gatsby"

import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import CONFIG from "../../config"

interface IProps {
  author: {
    name: string
    image: string
    biography: string
  }
}

export default ({ author }: IProps) => {
  return (
    <Grid
      container={true}
      justify="center"
      alignItems="center"
      direction={"column"}
    >
      <Link to="/">
        <Avatar
          style={{
            alignItems: "baseline",
            width: CONFIG.author.avatar.width,
            height: CONFIG.author.avatar.height,
          }}
          src={withPrefix(author.image)}
          alt={author.name}
        />
      </Link>
      <h1
        style={{
          color: CONFIG.author.title.color,
          fontSize: CONFIG.author.title.fontSize,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {author.name}
      </h1>
      <p
        style={{
          color: CONFIG.author.desc.color,
          fontSize: CONFIG.author.desc.fontSize,
          maxWidth: CONFIG.author.desc.maxWidth,
          margin: "auto",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        {author.biography}
      </p>
    </Grid>
  )
}
