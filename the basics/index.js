const http = require('http')

const requestHandler = (req, res, next) => {
  console.log(`In comes a request to: ${req.url}`)
  res.end('Hello World!')  
}

const server = http.createServer(requestHandler)

server.listen(3000)