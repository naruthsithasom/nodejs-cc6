const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
  res.send('Not user')
})
router.get('/first', (req, res) => {
  res.send('this is first user')
})

router.get('/second', (req, res) => {
  res.send('this is second user')
})

module.exports = router