const mu = require('../module-my/myUtil')

// class Human {
//   constructor(name, age = 30){
//     this.name = name
//     this.age = age
//   }
//   info() { console.log(this.name, this.age)}
// }

class Human {
  constructor(name, age = mu.myGetRandom(0,100)){ //  age = mu.myGetRandom(0,100) เรียกว่า dependency
    this.name = name
    this.age = age
  }
  info() { console.log(this.name, this.age)}
}
module.exports.myHuman = Human