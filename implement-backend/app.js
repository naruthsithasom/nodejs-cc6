//sudo npm init 
//sudo npm install express lodash cors
const express = require('express')
const app = express()
const cors = require('cors')
const todoListRoutes = require('./routes/todoList.js')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false}))//แปลงutf8

app.use('/todo-list', todoListRoutes)

app.listen(3000, () => console.log('implement backend running...'))