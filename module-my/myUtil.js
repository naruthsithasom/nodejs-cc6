const PI = 3.14
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min+1)) + min
}

function circleAre(r){
  return (PI * r) ** 2
}
//ส่งออก getRandom ทำได้ 3 วิธี

module.exports.myGetRandom = getRandom
//module.exports.gRandom = getRandom
//module.exports.pi = pi 
module.exports.myCircleArea =  circleAre