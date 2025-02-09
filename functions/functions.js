
function calculateArea(){
    let length=parseFloat(document.getElementById("length").value)
    let breadth=parseFloat(document.getElementById("breadth").value)
    let Area=length*breadth
    document.getElementById("result").innerText=`The area of rectangle is ${Area}`
}
let count=0
function displayCount(){
    document.getElementById("countDisplay").innerText=count
}
function checkCountValue(){
    if(count===10){
        alert("Your Instagram post got 10 followers")
    }
    if(count===20){
        alert("Your Instagram post got 20 followers..Keep going")
    }
}
function increaseCount(){
    count++
    displayCount()
    checkCountValue()
}