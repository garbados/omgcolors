const connect = require('connect')
const http = require('http')
const mustache = require('mustache')
const path = require('path')
const qs = require('qs')
const serveStatic = require('serve-static')
const url = require('url')
const { name, description, author } = require('./package.json')
const { readFile } = require('fs').promises

module.exports = async function () {
  const app = connect()
  const indexTemplate = await readFile(path.join(__dirname, 'src', 'mustache', 'index.mustache'), 'utf-8')

  app.use(serveStatic(path.join(__dirname, 'src', 'css')))
  app.use(serveStatic(path.join(__dirname, 'src', 'static')))

  app.use('/', (req, res) => {
    const { query } = url.parse(req.url)
    let text = decodeURIComponent(query)
    if (!text || text === 'null') text = 'Put text here like this: `/?hello world!`'
    const index = mustache.render(indexTemplate, {
      author,
      description,
      text,
      title: name
    })
    res.end(index)
  })

  return http.createServer(app)
}
