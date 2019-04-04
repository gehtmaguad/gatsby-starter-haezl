import * as React from "react"
import { SocialIcon } from "react-social-icons"
import THEME from "../../theme"

interface ISocialNetworks {
  networks: string[]
}

export default ({ networks }: ISocialNetworks) => (
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
            width: THEME.networkButton.width,
            height: THEME.networkButton.height,
          }}
          fgColor={THEME.networkButton.color}
          bgColor={THEME.networkButton.backgroundColor}
          target="_blank"
          url={networkUrl}
        />
      </li>
    ))}
  </ul>
)
