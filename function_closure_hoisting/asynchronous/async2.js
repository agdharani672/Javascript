//Asynchronous function:it is a fuction that runs in the background and it does not block the rest of the code from executing.

const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

console.log("Hi there")

let a=0;
for(let i=0;i<1000000000;i++){
    a++;
}


console.log("Hi, I am done");
