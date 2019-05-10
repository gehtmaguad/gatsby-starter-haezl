import "./src/styles/global.css"
require("prismjs/themes/prism-solarizedlight.css")

export const onServiceWorkerUpdateFound = () => {
  console.log("onServiceWorkerUpdateFound: reloading page")
  window.location.reload(true)
}
