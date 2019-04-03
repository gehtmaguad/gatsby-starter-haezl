import * as React from "react"
import { SocialIcon } from "react-social-icons"
import CONFIG from "../../config"

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
            width: CONFIG.networkButton.width,
            height: CONFIG.networkButton.height,
          }}
          fgColor={CONFIG.networkButton.color}
          bgColor={CONFIG.networkButton.backgroundColor}
          target="_blank"
          url={networkUrl}
        />
      </li>
    ))}
  </ul>
)
