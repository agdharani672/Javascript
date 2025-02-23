var d= new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo")
    },1000)
})

function callBack(){
    console.log("d",d);
}

console.log("d",d)
d.then(callBack)