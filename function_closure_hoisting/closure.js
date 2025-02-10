//Function Closure:A closure is a function that has access to its own scope, the scope in which it was created, and the global scope.

function outerFunction() {
    const outerVar = 'I am from the outer function';
    
    function innerFunction() {
        const innerVar = 'I am from the inner function';  // inner function variable
        console.log(innerVar);  // Accesses innerVar, which is local to innerFunction
        console.log(outerVar);  // Accesses outerVar, which is from outerFunction
    }
    
    innerFunction(); // inner function is called within outer function
    console.log(innerVar);  // Error: innerVar is not defined, it's scoped to innerFunction
}

outerFunction();