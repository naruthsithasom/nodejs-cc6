const fs = require('fs')
for (let i=0; i<10; i++){
  fs.readFile('./readme.txt', (err, data) => {
    console.log(data.toString())
  })
  console.log('-----------------------------------')
}
fs.readFile('./readme.md', (err, data) => {
  console.log(data)
})