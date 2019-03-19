import * as React from "react"
import { withPrefix, Link } from "gatsby"

import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"

interface IProps {
  author: {
    name: string
    image: string
    biography: string
  }
}

export default ({ author }: IProps) => {
  return (
    <Grid container justify="center" alignItems="center" direction={"column"}>
      <Link to="/">
        <Avatar
          src={withPrefix(author.image)}
          alt={author.name}
          style={{ alignItems: "baseline", width: 70, height: 70 }}
        />
      </Link>
      <h1
        style={{
          color: "white",
          fontSize: 30,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {author.name}
      </h1>
      <p
        style={{
          color: "white",
          fontSize: 20,
          maxWidth: 500,
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
