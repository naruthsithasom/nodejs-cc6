const { UV_FS_O_FILEMAP } = require('constants')
const fs = require('fs')
fs.readFile('./readme.txt', function( err, data ) {
  if(err) {
    console.log('Error...') 
    return
  }
  console.log(data.toString())
})
console.log('Done....')