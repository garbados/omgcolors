#!/usr/bin/env node

const yargs = require('yargs')
const getApp = require('.')

yargs
  .option('port', {
    alias: 'p',
    describe: 'Port for the server to listen on.',
    default: 3000
  })
  .parse(process.argv, async function (err, { port }) {
    if (err) throw err
    const app = await getApp()
    app.listen(port, () => {
      console.log(`Listening on port ${port}.`)
    })
  })
