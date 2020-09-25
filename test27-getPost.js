const http = require('http')
const fs = require('fs')
const url = require('url')

function renderHTML(filename, req, res){
  fs.readFile(filename, (err, data) => {
    res.writeHeader(200, { 'content' : 'text/html'})
    res.write(data)
    res.end()
  })
}

http.createServer( (req, res ) => {
  let pathURL = url.parse(req.url, true)
  console.log(pathURL.pathname)
  console.log(pathURL.query)

  if(req.url === '/'){
    return renderHTML('./index-test27.html', req, res )
  }

  if(req.url === '/register'){
    return renderHTML('./register-test27.html', req, res)
  }
  if(pathURL.pathname === '/getdata'){
    res.writeHeader(200, { 'content-type' : 'text/html; charset=utf8'})
    res.write(`<p>PAGE GETDATA</p>`)
    res.write(`<p>name: ${pathURL.query.fname} นามสกุล: ${pathURL.query.lname}</p>`)
    return res.end()
  }

  console.log(req.url)
  res.writeHead(404, {'content':'text/html'})
  res.write(req.url)
  res.end()

} ).listen(3000, () => console.log('Server running...'))