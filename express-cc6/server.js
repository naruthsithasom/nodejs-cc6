const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<i>Express api dsfasdfsa</i>')
})

app

app.listen(3000, () => console.log('Express Server is running...'))