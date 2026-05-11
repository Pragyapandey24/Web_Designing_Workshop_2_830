function solve(...args){
    const num = args[0];
    let result = "";
    let sum = 0;
    const digits = num.toString().length;
    let temp = num;
    while(temp>0){
        let digit = temp % 10;
        sum +=Math.pow(digit , digits);
        temp = Math.floor(temp/10);
    }
    if (sum==num){
        result = num + " is an armstrong number";
    }
    else{
        result = num + " is not an armstrong number";
    }
    return result;
}
function handleCheck(){
    let value = document.getElementById("num").value;
    if(value === ""){
        document.getElementById("result").innerText = "Please enter a number !";
        return;
    }
    let output = solve(Number(value));
    document.getElementById("result").innerText = output ;
}