const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const pathname = path.resolve(req.url.slice(1))
  fs.readFile(pathname, (err, data) => {
    if (err) {
      res.writeHead(200, {
        'contentType': 'text/plain'
      })
      res.end('404')
    } else {
      if (/\.svg|gif$/.test(req.url)) {
        res.setHeader(
          'Content-Type', 'image/svg+xml'
        )
      }
      res.end(data)
    }
  })
}).listen(3000, () => {
  console.log('服务已启动在localhost：3000');
})