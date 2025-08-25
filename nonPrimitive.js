let obj1 = {name: "Amit"};
let obj2 = obj1;                // obj2 gets refrence of obj1
obj2.name = "Ravi";             // changes at original place
console.log(obj1.name);
console.log(obj2.name);          // concept of deep copy shallow copy

