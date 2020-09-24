const fileName = require('fs')
let data, jsObj, users, newDataJson

//อ่าน JSON แล้วแปลงเป็น Object
data = fileName.readFileSync('./users.json')
jsObj = JSON.parse(data)
users = jsObj.users 

users.map( x => {
  x.phoneNumber = '+66' + x.phoneNumber
  console.log(`${x.firstName} - ${x.lastName} - ${x.phoneNumber}`)
})

//ใช้กลับเป็น JSON เหมือนเดิม หลังจากมีการ ้Add, Edit ,Delete
newDataJson = JSON.stringify(jsObj)
fileName.writeFileSync('./output.json', newDataJson)
console.log(newData)