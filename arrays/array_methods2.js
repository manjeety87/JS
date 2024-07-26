// Arrays useful methods

// indexOf
// includes
// slice
// join
// concat

// 0 base index
let fruits = ['banana','orange','apple','watermelon']
// console.log(fruits.length)
console.log(Array.isArray(fruits))

// indexOf - find the index of a specific element in array

let findApple = fruits.indexOf('apple')
console.log(findApple)

// includes - checks element present or not in array

let hasWaterMelon = fruits.includes('watermelon') // true or false
console.log(hasWaterMelon)



// slice  - do partition of an array into new array without modify original array retrun array

let sliceFruits = fruits.slice(1,3);
console.log(fruits)
console.log(sliceFruits)

// join method - create a string by joining all elements of an array using specified separator

let joinedFruits = fruits.join(', ') // retrun string
// console.log(typeof joinedFruits)
console.log(joinedFruits)

// concat method - allows merge arrays, creating new array without modify our original array
let numbers = [12,13,15, 'grapes']
let mixedArray = fruits.concat(numbers)

console.log(mixedArray)