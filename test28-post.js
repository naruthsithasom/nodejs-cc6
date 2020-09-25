const http = require('http')
const fs = require('fs')

let postHTML = fs.readFileSync('./formpost.html')

http.createServer((req, res) => {
  let body = ''
  req.on('data', (chunk) => {
    body += chunk // ประกอบ body ไปเรื่อยๆ
  })
  req.on('end', () => {
    body = decodeURI(body)//แปลงutf8
    console.log('body :'+ body)
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`<i> ${body} </i> <hr>`)
    res.end(postHTML)
  })
}).listen(3000, () => console.log('Server running...'))