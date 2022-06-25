import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from '../../public/app'

const getHTML = (html: string, styleTags: string) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Print Feed</title>
        ${styleTags}
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/app.js"></script>
      </body>
    </html>
  `
}

const renderPage = () => {
  const sheet = new ServerStyleSheet()

  const jsx = <App />

  const appHTML = ReactDOMServer.renderToString(sheet.collectStyles(jsx))

  const styleTags = sheet.getStyleTags()

  sheet.seal()

  const html = getHTML(appHTML, styleTags)

  return html
}

export default renderPage
