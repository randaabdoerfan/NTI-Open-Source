import Employee,{departments} from "./Module1.js";
import { addEmp,employees } from "./Module2.js";

let btn = document.getElementById("btn");
let text = document.getElementsByName("text_search")[0];
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
// 1-Import the Employee class.





let employee1 = new Employee("randa123", "ghanem", 24, 24000)
let employee2 = new Employee("yamen", "adballah", 32, 30000)


addEmp(employee1)
addEmp(employee2)

// console.log(employees);

first.innerHTML += `<h2 style='color:green;border-bottom:1px solid black'>Import Employee and Create function</h3>`;
employees.forEach(emp => {
    // return `${emp.fullName} : ${emp.Age} : ${emp.Salary}`
    first.innerHTML += `<h3>${emp.fullName} : ${emp.Age} : ${emp.Salary}</h3>`
});
third.innerHTML += `<h3>#############################</h3>`



// 3-Find employee by name.
first.innerHTML += `<h3>#############################</h3>`
second.innerHTML += `<h2 style='color:green;border-bottom:1px solid black'>3-Find employee by name.</h3>`;

btn.addEventListener("click", function () {

    let searched = employees.find(emp =>{
        return emp.firstName.toLowerCase() === text.value.toLowerCase();
        
});
console.log(searched)
    if (searched) {
        second.innerHTML += `<h3>${searched.fullName}</h3>`
        console.log(searched.fullName)
    } else {
        second.innerHTML += `<h3>No Employee has that name</h3>`
    }
})

// 4-Increase salary for an employee.
third.innerHTML += `<h2 style='color:green;border-bottom:1px solid black'>Increase salary for an employee.</h3>`;
employees.forEach(emp => {
    emp.IncreaseSalary(2000);
    // return `${emp.fullName} : ${emp.Age} : ${emp.Salary}`
    third.innerHTML += `<h3>${emp.fullName} : ${emp.Age} : ${emp.Salary}</h3>`;
});
