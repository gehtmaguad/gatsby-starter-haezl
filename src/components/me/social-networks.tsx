import * as React from "react"
import { SocialIcon } from "react-social-icons"

export default ({ networks, minimized = false }) => {
  return minimized ? (
    <ul style={{ marginLeft: 10, display: "inline" }}>
      {networks.map(networkUrl => (
        <li
          key={networkUrl}
          style={{
            display: "inline-block",
            verticalAlign: "top",
            paddingRight: 5,
            paddingLeft: 5,
            marginBottom: 0,
            marginTop: 5,
          }}
        >
          <SocialIcon
            style={{
              width: 30,
              height: 30,
            }}
            bgColor="#333"
            fgColor="white"
            target="_blank"
            url={networkUrl}
          />
        </li>
      ))}
    </ul>
  ) : (
    <ul
      style={{
        textAlign: "center",
        listStyleType: "none",
        margin: "40px 0 35px 0",
      }}
    >
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
              width: 45,
              height: 45,
            }}
            bgColor="#333"
            fgColor="white"
            target="_blank"
            url={networkUrl}
          />
        </li>
      ))}
    </ul>
  )
}
