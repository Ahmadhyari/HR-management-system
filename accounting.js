"use strict";


let tabos=document.getElementById("tabo")
let tableDepartments = document.createElement("table");
tabos.appendChild(tableDepartments);








// function renderHeader(){
    let tr = document.createElement("tr");
    tabos.appendChild(tr);
     
    let thOne = document.createElement("th");
    thFirst.textContent = "Department Name";
    tr.appendChild(thFirst);

    let thSec = document.createElement("th");
    thSec.textContent = "Number of employees in department"
    tr.appendChild(thSec);

    let thThir =document.createElement("th");
    thThir.textContent="Average salary of the department"
//     tr.appendChild(thThir);
// }
// renderHeader();


function renderBody(){
    for (let i = 0; i < Drink.allDrinks.length; i++) {
       Drink.allDrinks[i].renderBodyTable()} }