//const superMe = require('./module-my/myUtil.js') //จะใส่หรือไม่ใส่ .js ก็ได้ 

const myUtil = require('./module-my/myUtil')
const myPower = require('./module-my/myPower.js')
const { myUser } = require('./module-my/myUsers') //ส่งObject มาใช้

//การใช้ Module ทัี่สร้างเอง 3 วิธี
//console.log(superMe.pi)
//console.log(superMe.gRandom(3,4))

console.log(myUtil.myGetRandom(1,10))
console.log(myUtil.myCircleArea(100))
console.log(myPower.myBase(4,2))
console.log(myUser.firstName)