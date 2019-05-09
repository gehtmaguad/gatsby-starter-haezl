import "./src/styles/global.css"
require("prismjs/themes/prism-solarizedlight.css")

export const onServiceWorkerUpdateFound = () => {
  if (isBrowser) {
    const answer = window.confirm(
      `There was a change in the content of this webapp. ` +
        `Pull down in order to fetch the latest update!`
    )

    if (answer === true) {
      window.location.reload()
    }
  }
}
