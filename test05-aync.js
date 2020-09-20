function addSync(a, b){
  return a + b
}
let sum = addSync(1,2)

//Async callback function 
function add(a, b, callbackFunction){
  callbackFunction(null, a + b)
}

let sum2 = 0
add(3, 2, (err, returnValue) => {
  sum2 = returnValue
} )

console.log(sum)
console.log(sum2)