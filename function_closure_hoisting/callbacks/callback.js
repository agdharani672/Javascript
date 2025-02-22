// Callbacks are functions that are passed as arguments to other functions.
// Callbacks are used to execute code after another code has finished executing.
function square(num) {
    return num* num
}

function cube(num){
    return num**3
}

function addSomething(num1,num2,callback){
    return callback(num1) + callback(num2)
}


const squareResult=addSomething(2,2,square)
const cubeResult=addSomething(2,2,cube)
console.log("squareResult",squareResult)
console.log("cubeResult",cubeResult)