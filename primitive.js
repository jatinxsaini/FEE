// string

let firstname = "Sumit";
let city = 'mumbai';
let message = `Hello ${firstname}`;
let subject = `english
hindi`                                   // if we want to display in two different lines then use backticks (`)

console.log(subject);

// number

let age = 55;
let price = 199.99;

// booleam
let isLoggedIn = true;
let hasPermission = false;

// undefined
let x;
console.log(x);

// Symbol      (used to identify uniquely)
const sym1 = Symbol("unique")
const sym2 = Symbol("unique")
console.log(sym1===sym2)

// bigint

let bigNumber = 1111111122333333333333333334444444444444n;


// immutable 
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);