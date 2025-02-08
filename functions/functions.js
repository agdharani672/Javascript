

function calculateArea(){
    let length=parseFloat(document.getElementById("length").value)
    let breadth=parseFloat(document.getElementById("breadth").value)
    let Area=length*breadth
    document.getElementById("result").innerText=`The area of rectangle is ${Area}`
}