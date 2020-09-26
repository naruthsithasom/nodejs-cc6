const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listCount = 0

app.get('/search', (req, res) => {
  let formHtml = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="utf8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  
  <body>
    <div class="container">
      <h3>Method Post</h3>
      <form action="/dosearch" method="GET" target="_blank">
        <label for="fname">ชื่อ</label><br>
        <input type="text" name="firstname">
        <!-- <label for="lname">นามสกุล</label><br>
        <input type="text"name="lname"><br><br>  -->
        <input type="submit" value="OK">
      </form>
      <a href="/">Back</a>
    </div>  
    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"></script>
  </body>
  
  </html>`
  res.send(formHtml)
})
app.get('/dosearch', (req, res) => {
  //firstName มาจาก json
  //firstname มาจาก Tag html
  res.send(users.filter( key => key.firstName.includes(req.query.firstname)))
})
//------------------------------------------------
//ใช้query  http://localhost:3000/find?uname=newclear
app.get('/find', (req, res) => {
  res.send(users.find( index => index.firstName === req.query.uname))
})

//http://localhost:3000/users/1
app.get('/users/:uid', (req, res) => {
  res.send(users[req.params.uid - 1])
})

//ค้าหาผ่าน url http://localhost:3000/uname/3 (ใส่ตัวเลข)
app.get('/username/:uname', (req, res) => {
  res.send(users.find( value => value.firstName == req.params.uname))
})
//ใช้middle ware ต้องใส่ next
app.get('/list', (req, res,next) => {
  listCount++
  console.log('Request to /list number: ' + listCount)
  next() //middle ware ส่งต่อ /list 
})
app.get('/list', (req, res) => {
  res.send(users)
})
app.get('/listname', (req, res) => {
  let showHtml = '<ol>'
  users.forEach( index => {
    showHtml += `<li> ${index.firstName} : ${index.lastName}, <br> email: ${index.emailAddress}</li>` 
  })
  showHtml += '</ol>'
  res.send(showHtml)
})

app.listen(3000, () => console.log('Express-get.js is running...'))