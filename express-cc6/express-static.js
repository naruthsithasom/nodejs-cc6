
const express = require('express')
const app = express()
const userRoute = require('../route-cc6/userRoute.js')

//How to use express.static

//http://localhost:3000/form-express.html 
// form-express.html อยู่ใน public 
app.use(express.static('./public'))

//http://localhost:3000/pub/form-express.html
app.use('/pub', express.static('./public'))

//http://localhost:3000/pub/output.json
app.get('/', (req, res) => {
  res.redirect('/pub/output.json')
})

app.listen(3000, () => console.log('Express static running...'))