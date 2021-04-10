// Turn this function into an arrow function

const arrow = () =>{
  return "es6 is awesome!";
}
console.log( arrow())

// function arrow() {
//   return "es6 is awesome!";
// }

//Use the es6 syntax for default parameter
const defaultParameter = (name) => {
  var name = name || "sam";
  return name;
}
console.log(defaultParameter())

// function defaultParameter(name) {
//   var name = name || "sam";
//   return name;
// }


// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) =>{
  arr1 = [1,3,5]
  arr2 = [4,2]
  const arr3 = [...arr1,...arr2]
  return arr3.sort();
}
console.log(combineArrays())

// function combineArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }

//use destructuring to return the object's cyf property
const destructuring = (obj) =>{
  obj = obj || "cyf"
return  obj;
}
console.log(destructuring())

// function destructuring (obj) {
//   return obj.cyf;
// }


// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
}

console.log( templateString("musa ", "ablo")) 