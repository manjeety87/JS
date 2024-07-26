// Copied or cloned array

const ogArray = [87, 18, 111, 33, 7];
const copiedArr = [...ogArray];
console.log("COPIED Arr :", copiedArr);

// Merging arr using ...spread operator

const arr1 = [87, 18, 111, 33, 7];
const arr2 = [333, 45, 17, 1, 87];
const arr3 = [10, 20, 30, 40];
const mergedArr = [...arr1, ...arr2, ...arr3];
console.log("Merged Array :", mergedArr);

// add elements in array
const addArr = [11, 22, 33, 44];
const newArr = [...addArr, 55, 66, 77];
console.log("New ARR", newArr);

const ogObject = {
  name: "Mann",
  age: 24,
};
const dupObject = { ...ogObject };
console.log("Speard operator with object", dupObject);

// merge array
const obj1 = { name: "Sani" };
const obj2 = { age: 23 };
const mergeObj = { ...obj1, ...obj2 };
console.log("Merged object", mergeObj);
console.log("Merged object", mergeObj);

// adding properties inside object
const updateObj = { ...mergeObj, passion: "Coding", gender: "Male" };
console.log("Updated object", updateObj);
