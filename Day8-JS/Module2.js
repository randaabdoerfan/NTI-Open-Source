// 1-Import the Employee class.
import Employee, { departments } from './Module1.js';

let btn = document.getElementById("btn");
let text = document.getElementsByName("text_search")[0];
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

export let employees = [];

// Add 6 employee(s) to an array.
let employee1 = new Employee("randa", "erfan", 25, 15000)
let employee2 = new Employee("yamen", "ahmed", 55, 10000)
let employee3 = new Employee("abdallah", "hossam", 30, 25000)
let employee4 = new Employee("mohammed", "yousf", 35, 17000)
let employee5 = new Employee("mazen", "ebrahim", 20, 7000)
let employee6 = new Employee("mousa", "mohammed", 67, 50000)

// 2- Create functions to:
export function addEmp(employee) {
    employees.push(employee);
}
addEmp(employee1)
addEmp(employee2)
addEmp(employee3)
addEmp(employee4)
addEmp(employee5)
addEmp(employee6)
// console.log(employees);

// first.innerHTML += `<h2 style='color:green;border-bottom:1px solid black'>Import Employee and Create function</h3>`;
employees.forEach(emp => {
    // return `${emp.fullName} : ${emp.Age} : ${emp.Salary}`
    // first.innerHTML += `<h3>${emp.fullName} : ${emp.Age} : ${emp.Salary}</h3>`
});
// third.innerHTML += `<h3>#############################</h3>`

// 4-Increase salary for an employee.
// third.innerHTML += `<h2 style='color:green;border-bottom:1px solid black'>Increase salary for an employee.</h3>`;
employees.forEach(emp => {
    return emp.IncreaseSalary(0);
    // return `${emp.fullName} : ${emp.Age} : ${emp.Salary}`
    // third.innerHTML += `<h3>${emp.fullName} : ${emp.Age} : ${emp.Salary}</h3>`;
});

// 3-Find employee by name.
// first.innerHTML += `<h3>#############################</h3>`
// second.innerHTML += `<h2 style='color:green;border-bottom:1px solid black'>3-Find employee by name.</h3>`;

btn.addEventListener("click", function () {

    let searched = employees.find(emp =>{
        return emp.firstName.toLowerCase() === text.value.toLowerCase();
        
});
console.log(searched)
    if (searched) {
        // second.innerHTML += `<h3>${searched.fullName}</h3>`
        // console.log(searched.fullName)
    } else {
        // second.innerHTML += `<h3>No Employee has that name</h3>`
    }
})