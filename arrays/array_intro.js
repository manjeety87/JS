// Introduction of Array

// premitive non-premitive datatypes

// premitives - immutable value cant change directly
// boolean, numbers, string, null 


// non-premitive - mutable , value can change directly, store as a refernce in memory
// array, object , functions

//  What is array

// collection of same datatype like string, boolean, number, complex datatype

let oddNumbers = [1,3,5,7,9]; // array

console.log("Check whether array is array or not",Array.isArray(oddNumbers))
console.log("Type of",typeof oddNumbers)

let fruits = ['banana', 'apple','mangos']

let mixedArray = [1,1.3,'banana','apple','dog',2n];

// 0 base indexing
console.log("Mixed array",mixedArray[2])
