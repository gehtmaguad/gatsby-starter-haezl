import "./src/styles/global.css"
require("prismjs/themes/prism-solarizedlight.css")

export const onServiceWorkerUpdateFound = () => {
  if (
    window.confirm(
      `There was a change in the content of this webapp. ` +
        `Pull down in order to fetch the latest update!`
    )
  ) {
    window.location.reload(true)
  }
}
