// Array Methods
// push
// pop
// shift
// unshift

// push() - add element to the end of the array
let fruits = ['banana', 'apple','graps']
console.log(fruits)
fruits.push('melon', 'orange')
console.log("Fruits after push",fruits)

// pop() - removes last element from the array and also return value
let removedFruit = fruits.pop();
console.log("Fruits after pop",removedFruit)
// console.log(fruits)


// shift  - removes first element from the array and also return
let removedFruitShift = fruits.shift()
console.log("Fruits after shift",removedFruitShift)
console.log(fruits)


// unshift - add element at the first position on the array
fruits.unshift('orange','melon')
console.log("Fruits after unshift",fruits)