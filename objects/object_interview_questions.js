//object inside array

const products = [
  { id: 1, productName: "Laptop", price: 45000 },
  { id: 2, productName: "Andriod", price: 25000 },
  { id: 3, productName: "iOS", price: 75000 },
  { id: 3, productName: "Charger", price: 2000 },
];

for (let product of products) {
  console.log(product.id, ":", product.price); // dot notation
  console.log(product["id"], ":", product["price"]); // bracket notation is used when there's space in keys
}

// nested descructuring
const [{ productName, price, id }, { productName: pName, id: id2 }] = products;
console.log(
  "Prodcut name :",
  productName,
  ",",
  "Price :",
  pName,
  "ID : ",
  id,
  ": ID2",
  id2
);

const increasedPrice = 0.1;

for (let product of products) {
  product.price = product.price * (1 + increasedPrice);
  product.price = product.price.toFixed(2) // toFixed() -> call it on a number for specific numbers after decimal point as an arguement
}
console.log("Products after increased by 1 percent",products);
