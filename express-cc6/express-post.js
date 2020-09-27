//npm install body-parser
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const { json } = require('body-parser')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/pub', express.static('./public'))
//app.use('/', express.static('../express-cc6'))
app.get('/', (req, res) => {
  res.redirect('/pub/form-express.html')
})
app.post('/dosearch', (req, res) => {
  console.log(req.body)
  res.send( users.filter( index => index.firstName.includes(req.body.fname)))
})

app.listen(3000, () => console.log('Express-post running...'))

