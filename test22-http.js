
//Sample basic ex2
const http = require('http')

function app(req, res){
  console.log('request comeming')
  res.writeHead(200, {'Content-type' : 'text/html'})
  res.write('<i>Doggy Style on Newclear sex88</i>')
  res.end()
}

http.createServer(app).listen(3000)

//Sample ex1
// const http = require('http')
// const server = http.createServer()

// server.on('request', (req, res) => {
//   console.log('request comeming')
//   res.writeHead(200, {'Content-type' : 'text/html'})
//   res.write('Doggy Style on Newclear')
//   res.end()
// })

// server.listen(8080)

