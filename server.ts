// Imports
import * as express from 'express'
import * as path from "path";

// Set up the app and port
const app = express();
const _HOST = '0.0.0.0';
const _PORT = parseInt(process.env['PORT'] ? process.env['PORT'] : '8080');

// Change some express settings
app.enable('trust proxy')
app.disable('x-powered-by')

app.use('/',
  express.static(path.join(__dirname, 'dist/reprogleorg'))
)

app.use('/*',
  express.static(path.join(__dirname, 'dist/reprogleorg'))
)

//Handle graceful shutdowns
process.on('SIGTERM', () => {
  console.log('\nSIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})

// Start the server
console.log(`Starting http server on ${_HOST}:${_PORT}`)
const server = app.listen(_PORT, _HOST)
