import "./src/styles/global.css"
require("prismjs/themes/prism-solarizedlight.css")

export const onServiceWorkerUpdateFound = () => {
  if (
    window.confirm(
      `There was a change in the content of this webapp. \nReload webapp?`
    )
  ) {
    window.location.reload(true)
  }
}
