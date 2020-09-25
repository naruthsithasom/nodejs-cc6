const { Console } = require('console')

//ฝั่งserver 
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {

  let {httpVersion,method,url} = req

  console.log(httpVersion) //client send to server
  console.log(url)
  console.log(method)

})
server.listen(3000)

function show(){
  console.log('server:>>')
}E