import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Responsive from "react-responsive"

import { rhythm } from "../../utils/typography"
import Author from "../me/author"
import AboutButton from "../me/about-button"
import SocialNetworks from "../me/social-networks"
import CallToActionButton from "../me/calltoaction-button"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

interface IDataProps {
  site: {
    siteMetadata: {
      author: {
        name: string
        image: string
        biography: string
      }
      networks: string[]
    }
  }
}
interface IIndexProps {
  data: IDataProps
  styles: {
    paddingTop: number
    paddingBottom: number
    maxWidth: number
  }
  children: any
}

const IndexLayout = ({ data, styles, children }: IIndexProps) => (
  <div style={{ backgroundColor: "#eeeeee" }}>
    <div
      style={{
        backgroundImage: "linear-gradient(20deg, #039be5, #26a69a)",
      }}
    >
      <AboutButton />
      <div
        style={{
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
        }}
      >
        <Author author={data.site.siteMetadata.author} />
        <SocialNetworks networks={data.site.siteMetadata.networks} />
        <CallToActionButton />
      </div>
    </div>
    <div
      id={"children"}
      style={{
        flexGrow: 1,
        margin: "0 auto",
        maxWidth: styles.maxWidth,
        padding: rhythm(2),
        paddingTop: rhythm(1.5),
      }}
    >
      {children}
    </div>
  </div>
)

/*
      IndexLayoutWrapper
*/
export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
              image
              biography
            }
            networks
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: IDataProps) => (
      <>
        <Default>
          <IndexLayout
            data={data}
            styles={{ paddingTop: 75, paddingBottom: 75, maxWidth: 700 }}
          >
            {children}
          </IndexLayout>
        </Default>
        <Mobile>
          <IndexLayout
            data={data}
            styles={{ paddingTop: 50, paddingBottom: 50, maxWidth: 700 }}
          >
            {children}
          </IndexLayout>
        </Mobile>
      </>
    )}
  />
)
