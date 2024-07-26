// Clone array


// primitive datatypes

let num1 = 34
let num2 = num1  //num2 = 34 

console.log(num1,num2)
num1++;
console.log(num1,num2)


// non premitive (reference) - stored by address in memory no a value

// let array1 = ['apple','banana','oranges']  // 0x01
let array3 = array1 // array 3 -> 0x01
console.log(array1===array3)   // both arrays has same address

// console.log(array1)
// console.log(array3)

// array1.push('grapes')


// console.log(array1)
// console.log(array3)






// clone array
let array1 = ['banana','orange','apple']


// slice method
// let array2 = array1.slice()

// spread Operator
// let array2 = [...array1]

// Using Array.from()
// let array2 = Array.from(array1)

// concat method
let array2 = array1.concat([]);

console.log(array1)
console.log(array2)

array1.push('grapes')
console.log(array1)
console.log(array2)

// false -> two arrays are independent(clone) so refer to different address in memory
console.log(array1===array2) 