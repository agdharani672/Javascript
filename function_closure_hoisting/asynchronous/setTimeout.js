console.log("hi there");

setTimeout(function(){
    console.log("i am inside asyncs function");
},10000);

let a=0;
for (i=0; i<=100000000; i++){
    a++;
}

console.log("a",a)