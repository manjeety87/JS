const car = {
  name: "Thar",
  model: "Camery",
  year: 1999,
};

console.log(car);

for (let key in car) {
  console.log(key, ":", car[key]);
}

// Object.keys
console.log(Object.keys(car)); // returning an array

console.log("Using Object.keys for of loop");
for (let key of Object.keys(car)) {
  console.log("For of loop -> ", key, ":", car[key]);
}

const nameObj = [
  { name: "Mann", age: 24 },
  { name: "Manjeet", age: 19 },
  { name: "sid", age: 21 },
];

for (let object of nameObj) {
  console.log("Object in Array -> ", object.name, ":", object.age);
}
