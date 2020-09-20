let callbackValueGobal;

function hello4(err, value){
  callbackValueGobal = value;
}

function tyrHello4(callbackFunction){
  let returnValue = 'returnValue';
  let callbackValue = 'callbackValue';
  
  callbackFunction(null, callbackValue);
  return returnValue;
}

console.log(tyrHello4(hello4));
console.log(callbackValueGobal);