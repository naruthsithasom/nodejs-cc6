//npm 
// body จัดการhtml
// ls จัดการการลง npm
//npm install -g nodemon

const http = require('http')
const fs = require('fs')
const formBody = require('body/form') 

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req, res) => {
  if(req.url === '/')
    return res.end(postHTML)

  formBody(req, res, (err, body) => {
    if(err){
      res.statusCode = 500
      return res.end('Have error with body...')
    }
    console.log(body.fname+' '+body.lname)//fname ,lname มาจาก formpost.html
    res.writeHead(200)
    res.write(`<p style="background-color: green;">ชื่อ ${body.fname} นามสกุล ${body.lname} </p><hr>`)
    res.end(postHTML)
  })
}).listen(3000, () => console.log('Server is running...'))
