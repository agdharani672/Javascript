const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuHtml=breakfastMenu.map((item,index)=>`<p>Item ${index+1}:${item}</p>`).join("")
document.getElementById("breakfastMenuItems").innerHTML=breakfastMenuHtml

// const mainCourseMenuItems=mainCourseMenu.forEach((item,index)=>`<p>Item ${index+1}:${item}</p>`).join("")
// document.getElementById("maincourseMenuItems").innerHTML=mainCourseMenuHtml
let mainCourseMenuItems=""
mainCourseMenu.forEach((item,index)=>mainCourseMenuItems+=`<p>Item ${index+1}: ${item}</p>`)
document.getElementById("maincourseMenuItems").innerHTML=mainCourseMenuItems

let dessertMenuItems=""
for (i=0;i<dessertMenu.length;i++){
    dessertMenuItems+=`<p>Item ${i+1}:${dessertMenu[i]} </p>`
}
document.getElementById("dessertMenuItems").innerHTML=dessertMenuItems