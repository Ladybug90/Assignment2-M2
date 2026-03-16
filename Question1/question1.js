let employees = [];

/* FETCH DATA USING ASYNC/AWAIT */

async function loadEmployees(){

try{

const response = await fetch("employees.json");

const data = await response.json();

employees = data.employees;


/* SORT BY AGE */

employees.sort((a,b) => a.age - b.age);


/* DISPLAY EMPLOYEES */

displayEmployees(employees);


/* MAP FULL NAMES */

const fullNames = employees.map(({firstName,lastName}) =>
`${firstName} ${lastName}`
);

console.log("Full Names:", fullNames);


/* REDUCE TOTAL SALARY */

const totalSalary = employees.reduce((total,emp)=>
total + emp.salary,0);

document.getElementById("totalSalary").innerHTML =
"Total Salary of Employees: $" + totalSalary;


/* FILTER SALARY > 55000 */

const highEarners = employees.filter(emp =>
emp.salary > 55000
);

console.log("Employees earning over $55,000:",
highEarners.map(emp => emp.firstName + " " + emp.lastName)
);


/* STORE SORTED DATA */

localStorage.setItem(
"employees",
JSON.stringify(employees)
);

}

catch(error){

console.error("Error fetching data:",error);

}

}

loadEmployees();


/* DISPLAY FUNCTION */

function displayEmployees(list){

let output = "<ul>";

list.forEach(emp =>{

output += `<li>
${emp.firstName} ${emp.lastName} |
Age: ${emp.age} |
Department: ${emp.department} |
Salary: $${emp.salary}
</li>`;

});

output += "</ul>";

document.getElementById("demo").innerHTML = output;

}


/* SEARCH BAR (BONUS) */

document.getElementById("searchBar")
.addEventListener("keyup",function(){

const search = this.value.toLowerCase();

const filtered = employees.filter(emp =>
(emp.firstName + " " + emp.lastName)
.toLowerCase()
.includes(search)
);

displayEmployees(filtered);

});


/* LOCAL STORAGE FUNCTIONS */

function showStorage(){

const stored =
JSON.parse(localStorage.getItem("employees"));

console.log("Stored Employees:",stored);

}


function removeStorage(){

localStorage.removeItem("employees");

console.log("Employees removed from storage");

}


function clearStorage(){

localStorage.clear();

console.log("Local storage cleared");

}