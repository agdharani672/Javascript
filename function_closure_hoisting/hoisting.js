hello()

// function hello(){
//     console.log("Function is called because not assigned to any variable")
// }

//cannot access before decalration because it is being assigned
const hello=function(){
    console.log("it wont be called")
}
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (i.e., the top of the function or the global scope) during the compilation phase, before the code is executed. 

console.log(myVar); // undefined, not ReferenceError
var myVar = 5;
console.log(myVar); // 5

console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;

// Hoisting with Functions:
console.log(myFunction()); // "Hello, World!"

function myFunction() {
    return "Hello, World!";
}

// Function Expressions (not hoisted):
console.log(myFunc()); // TypeError: myFunc is not a function

var myFunc = function() {
    return "Hello, World!";
};
