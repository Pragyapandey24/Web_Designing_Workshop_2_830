let emp = [];

// Add employee
function addEmployee() {
    let e = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    };

    emp.push(e);
    alert("Added!");
}

// Display all
function display() {
    let out = "";
    for (let e of emp) {
        out += `${e.name} | ${e.id} | ${e.salary} | ${e.dept} <br>`;
    }
    document.getElementById("output").innerHTML = out;
}

// Filter salary > 50000
function filter() {
    let f = emp.filter(e => e.salary > 50000);
    let out = "";

    for (let e of f) {
        out += `${e.name} - ${e.salary} <br>`;
    }

    document.getElementById("output").innerHTML = out;
}

// Total salary
function total() {
    let sum = 0;
    for (let e of emp) {
        sum += e.salary;
    }
    document.getElementById("output").innerHTML = "Total: " + sum;
}

// Average salary
function average() {
    let sum = 0;
    for (let e of emp) {
        sum += e.salary;
    }
    let avg = emp.length ? sum / emp.length : 0;

    document.getElementById("output").innerHTML = "Average: " + avg;
}

// Count department
function countDept() {
    let d = document.getElementById("searchDept").value;
    let count = 0;

    for (let e of emp) {
        if (e.dept.toLowerCase() === d.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        "Employees in " + d + ": " + count;
}