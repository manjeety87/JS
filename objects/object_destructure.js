const personObj = {
  name: "Mann",
  age: 24,
  country: "INDIA",
  gender: "M",
};
console.log("PERSON OBJECT", personObj);

const { name, age, country, ...rest } = personObj;
console.log(
  "Name :",
  name,
  "Age :",
  age,
  "Country :",
  country
  // "REST :", ...rest
);

const fullName = { fisrtName: "Manjeet Singh", lastName: "Yadav" };
const { fisrtName: first, lastName: last } = fullName;
console.log("FIRST", first, "&", "LAST", last, "name");

// define initial value
const gitUser = { userName: "manjeety87" };
const { userName, password = "default" } = gitUser;

console.log("Password", password);


//Nested  object destructuring
const personalDetails = {
    name: "Mann",
    age: 24,
        address:{
            city:"Mumbai",
            country: "INDIA",
        },
        gender: "M",
}
//address country -> accessed nested object
const { name:myName, address:{city,country:myCountry} } = personalDetails;

console.log("CITY :",city);
console.log("Country :",myCountry);