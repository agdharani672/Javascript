const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000,specialization:"Java" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization:"Python" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization:"Java" },
    //... More employee records can be added here
  ];

function displayEmployees(){
    const employeeDisplayHtml=employees.map((employee)=>`<p>${employee.id}-${employee.name}-${employee.age}-${employee.department}-${employee.salary}</p>`)
    document.getElementById("employeesDetails").innerHTML=employeeDisplayHtml
}

function calculateTotalSalaries(){
    const totalSalary=employees.reduce((acc,employee)=>acc+employee.salary,0)
    alert(`Total salary of employees is ${totalSalary}`)
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee=employees.find((employee)=>employee.id=== employeeId)
    if(foundEmployee){
        console.log("foundEMployee",foundEmployee)
        document.getElementById("employeesDetails").innerHTML=`<p>${foundEmployee.id}-${foundEmployee.name}-${foundEmployee.age}-${foundEmployee.department}-${foundEmployee.salary}</p>`
    }
}

function findEmployeeBySpecialization(employeeSpecialization){
    const findEmployee=employees.find((employee)=>employee.specialization===employeeSpecialization)
    const findAllEmployees=employees.filter((employee)=>employee.specialization===employeeSpecialization)
    console.log("finding result using find",findEmployee)
    console.log("findingAllEmployees in a array",findAllEmployees)
    document.getElementById("employeesDetails").innerHTML=`<p>${findEmployee.id}-${findEmployee.name}-${findEmployee.department}</p>`
    const findAllEmployeesHtml=findAllEmployees.map((employee)=>`<p>${employee.id}-${employee.name}-${employee.specialization}</p>`)
    document.getElementById("findAllEmployeesHtml").innerHTML=findAllEmployeesHtml
}
