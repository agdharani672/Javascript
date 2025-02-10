//IIFE :Immediately Invoked Function Expression

//named IIFE function-An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and invoked immediately. It's a common pattern used to create a local scope, so that variables within the IIFE are not polluting the global scope
(function add(num1,num2){
    console.log("total",num1+num2)
}(2,5));


//not named IIFE function
(function (num1,num2){
    console.log("difference",num1-num2)
}(5,5));

((num1,num2)=>{
    console.log("total",num1+num2)
})(2,3);
