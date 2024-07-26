// Array Destructure

// extract values from an array

const array = ['apple','banana','grapes','orange', 'mangos', 'watermelon']

// basic array destructure

let [val1,val2,val3,val4] = array

console.log(val1, val2, val3, val4)
// console.log(typeof val1)


// skip some values with rest destructure
let [a,b,...rest] = array

console.log(Array.isArray( rest))
console.log(rest)
console.log(typeof a, a)



