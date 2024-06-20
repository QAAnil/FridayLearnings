// Array  - A Variable like structure that can hold more that 1 Value

let fruits = ["Apple", "orange", "Banana"];
console.log(fruits); // Accessing all elements within the array

//Index start with zero
console.log(fruits[1]); // Accessing specific element within the array

// want to add any elements in the array
fruits.push("papaya");
console.log(fruits);

// POP will remove last elements in the array
fruits.pop();
console.log(fruits);

// unshift will add begining of the array
fruits.unshift("mango");
console.log(fruits);

// shift will remove begining of the array
fruits.shift();
console.log(fruits);

//lenght and Index of an array
const numoffruits = fruits.length;
console.log(numoffruits);
const index = fruits.indexOf("mango");
console.log(index);

// we can use for loop  Index of an array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// check Initialization, condition and after Increment/2
for (let i = 0; i < fruits.length; i += 2) {
  console.log(fruits[i]);
}

// check Initialization, condition and after Increment/2
for (let i = 1; i < fruits.length; i += 2) {
  console.log(fruits[i]);
}

// check Initialization, condition and after decrement/2
for (let i = fruits.length; i > 0; i--) {
  console.log(fruits[i]);
}

// check Initialization, condition and after decrement/2
for (let i = fruits.length - 1; i > 0; i--) {
  console.log(fruits[i]);
}

fruits.sort();
console.log(fruits);

fruits.sort().reverse();
console.log(fruits);

//Advance Arrays
for (let fruit of fruits) {
  console.log(fruit);
}
