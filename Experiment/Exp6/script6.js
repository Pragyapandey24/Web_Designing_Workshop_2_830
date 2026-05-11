// Change heading text
document.getElementById("btn1").addEventListener("click", function () {
    let t = document.getElementById("text").value;
    document.getElementById("heading").innerText = t;
});

// Change background color
document.getElementById("btn2").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

// Increase font size
document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("heading").style.fontSize = "40px";
});

// Show/Hide paragraph
document.getElementById("btn4").addEventListener("click", function () {
    let p = document.getElementById("para");

    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
})