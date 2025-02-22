
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");
// const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// let tasks=[];

// function addTasks(){
//     const taskInput=document.getElementById("taskInput")
//     console.log("taskInput",taskInput.value)
//     const taskInputText=taskInput.value.trim()
//     if(taskInputText!==""){
//         tasks.push({text:taskInputText})
//         taskInput.value=""
//         console.log("tasks",tasks)
//     }
//     else{
//         alert("Please enter valid value:")
//         taskInput.value=""
//     }
// }

// function displayTask(){
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML=""
//     tasks.forEach((task,index)=>{
//         const li=document.createElement("li")
//         li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
//                     <label for="task-${index}">${task.text}</label>`;
//                 li.querySelector("input").addEventListener("change", () => toggleTask(index));
//         taskList.appendChild(li)
//     })

// }

// Define a JSON object representing information about a person
const personJSON = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "tags": ["JavaScript", "Node.js", "Web Development"],
    "isStudent": false,
    "workExperience": null
  };
  // Convert the JSON object to a string
  console.log("personJSON",personJSON)
  const jsonString = JSON.stringify(personJSON);
  console.log(jsonString);

