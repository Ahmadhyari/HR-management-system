"use strict";


function Employee(employeeId, fullName, department, level) {
    this.employeeIdNumber = employeeId;
    this.employeeNam = fullName;
    this.departmentName = department;
    this.whichLevel = level;
    this.imageUrl = " here we will write the path of image for each employee and the image named with the employee name"

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
    return Math.floor(Math.random() * (max - min)) + min;

}



Employee.prototype.nameSalary = function () {
    document.write(`<p> - The employee Name is ${this.employeeNam}</p>`);
    document.write("The  net salary is :")
    document.write(`<p> ${this.salary() - this.salary() * 0.075}</p>`);
}






let employeeGhazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior");
let employeeLana = new Employee("1001", "Lana Ali", "Finance", "Senior",);
let employeeTamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior");
let employeeSafi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior");
let employeeOmar = new Employee("1004", "Omar Zaid", "Development", "Senior");
let employeeRana = new Employee("1005", "Rana Saleh", "Development", "Junior");
let employeeHadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior");


employeeGhazi.nameSalary();
employeeLana.nameSalary();
employeeTamara.nameSalary();
employeeSafi.nameSalary();
employeeOmar.nameSalary();
employeeRana.nameSalary();
employeeHadi.nameSalary();

