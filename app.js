"use strict";

let allEmployee = [];
let form = document.getElementById("form");


function Employee(employeeId, fullName, department, level, image) {
    this.employeeIdNumber = employeeId;
    this.employeeNam = fullName;
    this.departmentName = department;
    this.whichLevel = level;
    this.imageUrl = image;
    allEmployee.push(this);

}



function randomIdnum() {
    return Math.floor(Math.random() * 10000);
}

Employee.prototype.salary = function () {
    var level = this.whichLevel;


    if (level != "Mid-Senior" && level != "Junior") {
        var min = 1500;
        var max = 2000;
    } else if (level != "Junior" && level != "Senior") {
        var min = 1000;
        var max = 1500;
    } else if (level != "Senior" && level != "Mid-Senior") {
        var min = 500;
        var max = 1000;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;

}



Employee.prototype.emoloyeeInfo = function () {
    document.write(`<p> - The employee Name is ${this.employeeNam}</p>`);
    document.write(`<p> He is in  ${this.departmentName} department</p>`);
    document.write(`<p> The level of employee is ${this.whichLevel} </p>`);
    document.write("The  net salary is :")
    document.write(`<p> ${this.salary() - this.salary() * 0.075}</p>`);
   
}


form.addEventListener("submit", addemloyee)

function addemloyee(event) {
    event.preventDefault();
    let fullName=event.target.fname.value;
    let department=event.target.Department.value;
    let level=event.target.Level.value;
    let image=event.target.imageUrl.value;

    let newEmployee = new Employee("00000" , fullName , department, level, image);
    newEmployee.emoloyeeInfo();
}




let employeeGhazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./images/Ghazi.jpg");
let employeeLana = new Employee("1001", "Lana Ali", "Finance", "Senior", "./images/Lana.jpg");
let employeeTamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./images/Tamara.jpg");
let employeeSafi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./images/Safi.jpg");
let employeeOmar = new Employee("1004", "Omar Zaid", "Development", "Senior", "./images/Omar.jpg");
let employeeRana = new Employee("1005", "Rana Saleh", "Development", "Junior", "./images/Rana.jpg");
let employeeHadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./images/Hadi.jpg");



for (let i = 0; i < allEmployee.length; i++){
    allEmployee[i].emoloyeeInfo();
}