export default class Employee {
    constructor(_firstName, _lastName, _age, _salary) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.salary = _salary;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    get Age(){
        return `${this.age}`
    }
    get Salary(){
        return `${this.salary}`
    }
    IncreaseSalary(val) {
        this.salary = this.salary + val;
    }
}
export let departments = ["IT", "HR", "Finance", "Sales"]

