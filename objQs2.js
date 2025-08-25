const employee = {
    name: "John",
    position: "Developer",
    salary: 50000
}

employee.salary = 60000
employee["Department"] = "IT"
delete employee.position

console.log(employee)