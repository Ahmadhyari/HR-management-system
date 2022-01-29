"use strict";

let allEmployee = [];
let tableplaceid = document.getElementById("tableplaceid");
let table=document.createElement("table")
tableplaceid.appendChild(table);

let tableTwo=document.createElement("table");
let tableFot=document.getElementById("tableFot");
tableFot.appendChild(tableTwo);

let admTs=0;
let finTs=0;          
let marTs=0;
let devTs=0;
let avgSala;
let avgSalf;
let avgSalm;               
let avgSald;
let devCou=0;
let marCou=0;
let fiaCou=0;
let admCou=0;



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

let employeeGhazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./images/Ghazi.jpg");
let employeeLana = new Employee("1001", "Lana Ali", "Finance", "Senior", "./images/Lana.jpg");
let employeeTamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./images/Tamara.jpg");
let employeeSafi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./images/Safi.jpg");
let employeeOmar = new Employee("1004", "Omar Zaid", "Development", "Senior", "./images/Omar.jpg");
let employeeRana = new Employee("1005", "Rana Saleh", "Development", "Junior", "./images/Rana.jpg");
let employeeHadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./images/Hadi.jpg");




    



function renderBody(){
    for (let i = 0; i < allEmployee.length; i++) {
       allEmployee[i].renderBodyTable();
        
    }
}

function renderHeader (){
    let tr = document.createElement("tr")
    table.appendChild(tr);

    let thOne = document.createElement("th");
    tr.appendChild(thOne);
    thOne.textContent ="---Department Name---";

    let thSec = document.createElement("th");
    tr.appendChild(thSec);
    thSec.textContent = "---Number of employees in the department---"
    
    let thThir = document.createElement("th");
    tr.appendChild(thThir);
    thThir.textContent = "---Average salary of the department---"

    let thFour=document.createElement("th");
    tr.appendChild(thFour);
    thFour.textContent="---Total salary---"
}






for(let i=0;i<allEmployee.length;i++){

if(allEmployee[i].departmentName =="Administration"){
   
    admTs=admTs+allEmployee[i].salary();
    admCou=admCou+1;
    avgSala=admTs/admCou;
    

}

else if(allEmployee[i].departmentName =="Finance"){
   
    finTs=finTs+allEmployee[i].salary();
    fiaCou=fiaCou+1;
    avgSalf=finTs/fiaCou;


}

else if(allEmployee[i].departmentName =="Marketing"){
   
    marTs=marTs+allEmployee[i].salary();
    marCou=marCou+1;
    avgSalm=marTs/marCou;

}

else if(allEmployee[i].departmentName =="Development"){
   
    devTs=devTs+allEmployee[i].salary();
    devCou=devCou+1
    avgSald=devTs/devCou;
} else{}
}




function renderBodyTable(){

// ----------Administration--------


    let trd = document.createElement("tr")
    table.appendChild(trd);

    let tdOne = document.createElement("th");
    trd.appendChild(tdOne);
    tdOne.textContent ="Administration";

    let tdSec = document.createElement("th");
    trd.appendChild(tdSec);
    tdSec.textContent = admCou;
    
    let tdThir = document.createElement("th");
    trd.appendChild(tdThir);
    tdThir.textContent = avgSala;

    let tdFour=document.createElement("th");
    trd.appendChild(tdFour);
    tdFour.textContent=admTs;


// ----------Finance--------

    let trdt = document.createElement("tr")
    table.appendChild(trdt);

    let tdOnet= document.createElement("th");
    trdt.appendChild(tdOnet);
    tdOnet.textContent ="Finance";

    let tdSect = document.createElement("th");
    trdt.appendChild(tdSect);
    tdSect.textContent = fiaCou;
    
    let tdThirt= document.createElement("th");
    trdt.appendChild(tdThirt);
    tdThirt.textContent = avgSalf;

    let tdFourt=document.createElement("th");
    trdt.appendChild(tdFourt);
    tdFourt.textContent=finTs;

// ------------Development----------


let trdth = document.createElement("tr")
table.appendChild(trdth);

let tdOneth = document.createElement("th");
trdth.appendChild(tdOneth);
tdOneth.textContent ="Development";

let tdSecth = document.createElement("th");
trdth.appendChild(tdSecth);
tdSecth.textContent = devCou;

let tdThirth = document.createElement("th");
trdth.appendChild(tdThirth);
tdThirth.textContent = avgSald;

let tdFourth=document.createElement("th");
trdth.appendChild(tdFourth);
tdFourth.textContent=devTs;

// -----------Marketing-----------

let trdfo = document.createElement("tr")
table.appendChild(trdfo);

let tdOnefo = document.createElement("th");
trdfo.appendChild(tdOnefo);
tdOnefo.textContent ="Marketing";

let tdSecfo = document.createElement("th");
trdfo.appendChild(tdSecfo);
tdSecfo.textContent = marCou;

let tdThirfo = document.createElement("th");
trdfo.appendChild(tdThirfo);
tdThirfo.textContent = avgSalm;

let tdFourfo=document.createElement("th");
trdfo.appendChild(tdFourfo);
tdFourfo.textContent=marTs;


}


renderHeader();
renderBodyTable();







function renderFooterTable (){

    let trFott = document.createElement("tr")
    tableTwo.appendChild(trFott);

    let thOnefott = document.createElement("th");
    trFott.appendChild(thOnefott);
    thOnefott.textContent ="---Department---";

    let thSecfott = document.createElement("th");
    trFott.appendChild(thSecfott);
    thSecfott.textContent = "---# of employees---"
    
    let thThirfott = document.createElement("th");
    trFott.appendChild(thThirfott);
    thThirfott.textContent = "---the average salary for all departments---"

    let thFourfott=document.createElement("th");
    trFott.appendChild(thFourfott);
    thFourfott.textContent="---Total Salaries---"
// --------------------Administration-----------------------

    let trdfott = document.createElement("tr")
    tableTwo.appendChild(trdfott);

    let tdOnefott = document.createElement("th");
    trdfott.appendChild(tdOnefott);
    tdOnefott.textContent ="Administration";

    let tdSecfott = document.createElement("th");
    trdfott.appendChild(tdSecfott);
    tdSecfott.textContent = admCou;
    
    let tdThirfott = document.createElement("th");
    trdfott.appendChild(tdThirfott);
    tdThirfott.textContent = avgSala;

    let tdFourfott=document.createElement("th");
    trdfott.appendChild(tdFourfott);
    tdFourfott.textContent=admTs;


    // ----------Finance--------

    let trdt = document.createElement("tr")
    tableTwo.appendChild(trdt);

    let tdOnetfot= document.createElement("th");
    trdt.appendChild(tdOnetfot);
    tdOnetfot.textContent ="Finance";

    let tdSectfot = document.createElement("th");
    trdt.appendChild(tdSectfot);
    tdSectfot.textContent = fiaCou;
    
    let tdThirtfot= document.createElement("th");
    trdt.appendChild(tdThirtfot);
    tdThirtfot.textContent = avgSalf;

    let tdFourtfot=document.createElement("th");
    trdt.appendChild(tdFourtfot);
    tdFourtfot.textContent=finTs;

// ------------Development----------


let trdth = document.createElement("tr")
tableTwo.appendChild(trdth);

let tdOnethfot = document.createElement("th");
trdth.appendChild(tdOnethfot);
tdOnethfot.textContent ="Development";

let tdSecthfot = document.createElement("th");
trdth.appendChild(tdSecthfot);
tdSecthfot.textContent = devCou;

let tdThirthfot = document.createElement("th");
trdth.appendChild(tdThirthfot);
tdThirthfot.textContent = avgSald;

let tdFourthfot=document.createElement("th");
trdth.appendChild(tdFourthfot);
tdFourthfot.textContent=devTs;

// -----------Marketing-----------

let trdforfot = document.createElement("tr")
tableTwo.appendChild(trdforfot);

let tdOnefofot = document.createElement("th");
trdforfot.appendChild(tdOnefofot);
tdOnefofot.textContent ="Marketing";

let tdSecfofot = document.createElement("th");
trdforfot.appendChild(tdSecfofot);
tdSecfofot.textContent = marCou;

let tdThirfofot = document.createElement("th");
trdforfot.appendChild(tdThirfofot);
tdThirfofot.textContent = avgSalm;

let tdFourfofot=document.createElement("th");
trdforfot.appendChild(tdFourfofot);
tdFourfofot.textContent=marTs;


// ------------total-----------

let totalALL = document.createElement("tr")
tableTwo.appendChild(totalALL);

let tdOnefffot = document.createElement("th");
totalALL.appendChild(tdOnefffot);
tdOnefffot.textContent ="Total";

let tdSecfffot = document.createElement("th");
totalALL.appendChild(tdSecfffot);
tdSecfffot.textContent = admCou+marCou+devCou+fiaCou;

let tdThirfffot = document.createElement("th");
totalALL.appendChild(tdThirfffot);
tdThirfffot.textContent =avgSala+avgSalf+avgSald+avgSalm;


let tdFourfffot=document.createElement("th");
totalALL.appendChild(tdFourfffot);
tdFourfffot.textContent=admTs+finTs+marTs+devTs;



}

renderFooterTable();


