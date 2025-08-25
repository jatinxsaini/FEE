const person = {
    name: "vaibhav",
    course: "CSE"
}

let abc = "course";
console.log(person[abc])        // when accessing directly done by "." operator, indirectly by [] suare brackets

// for in loop

for(let prop in person){             // when accessing properties of an object
    console.log(prop + ": " + person[prop]);
}

// for of loop

let fruits = ["Apple", "Mango", "Banana"];

for(let fruit of fruits){
    console.log(fruit);
}

// checking iterable
console.log(typeof fruits[Symbol.iterator])        // if function, then iterator, if undefined then not iterator
