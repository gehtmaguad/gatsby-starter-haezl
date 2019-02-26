import * as React from "react"
import { SocialIcon } from "react-social-icons"

export default ({ networks }) => (
  <ul style={{ textAlign: "center", listStyleType: "none" }}>
    {networks.map(networkUrl => (
      <li
        key={networkUrl}
        style={{
          display: "inline-block",
          verticalAlign: "top",
          paddingRight: 5,
          paddingLeft: 5,
        }}
      >
        <SocialIcon
          style={{
            width: 35,
            height: 35,
          }}
          target="_blank"
          url={networkUrl}
        />
      </li>
    ))}
  </ul>
)
