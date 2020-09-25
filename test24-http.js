//ฝั่ง server ส่งให้ client แสดง status 200 404
const http  = require('http')

http.createServer((req, res) => {

  res.writeHead( 200, {
    'content-type':'text/html',
    'Dean':'Love Newclear'
  })//ส่งHeader แสกงstatus
  res.write('this is response message.. <br>')
  res.write('from your local server <br>')
  res.end('<h2> Good by </h2>')

}).listen(3000, () => { console.log('server running..')})