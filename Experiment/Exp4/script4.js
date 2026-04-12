function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let marks = parseFloat(prompt("Enter marks of subject " + (i + 1)));
        total += marks;
    }

    let avg = total / n;
    let grade, result;

    if (avg >= 90) grade = "A+";
    else if (avg >= 80) grade = "A";
    else if (avg >= 60) grade = "B";
    else if (avg >= 40) grade = "C";
    else grade = "F";

    result = (avg >= 40) ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + avg + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}