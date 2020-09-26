//http://localhost:3000/user/first ใช้งาน
//http://localhost:3000/user/second ใช้งาน

const express = require('express')
const app = express()

const userRoute = require('./userRoute.js') //.js ใส่หรือไม่ใช้ก็ได้ 
app.use('/user', userRoute) //ให้ชี้ไป route ของ userRoute

app.listen(3000, () => console.log('route running..'))