let mixedArray = [1, "Hello" , true , {name:"Alice"},[1,2,3]];
console.log(mixedArray.length);

function greet(){
    console.log("Hello World!");
}
greet();

function multiply(a,b){
    return a*b;
}

let divide = function(a,b){
    return a/b;
};
console.log(divide(10,2));

let add = function(a,b){
    return a+b ;
};
console.log(add(5,7));

let sayHi = () => console.log("Hi");
sayHi();

// arrow function with single parameter
let square = x => x*x;
console.log(square(4));

// arrow function with one parameters
const greetUser = (name) => {
    console.log('Hello , ${name}!');
}
greetUser("Alice");

let newarray = [1,2,3,4,5];
let squaredArray = newarray;
map((num) => num * num);
console.log(squaredArray);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator , currentValue ) => accumulator + currentValue,0);
console.log(total);

let students = [{name : "Alice", marks : 85},
    {name : "Bob", marks:92},
    {name : "Nishu", marks:100}
];

let marks = students.map(student => student.marks);
console.log(marks);

let names = students.map(student => student.name);
console.log(names);

let topStudents = student.filter(student = student.marks >80);
console.log(topStudents);

let totalMarks = student.reduce((acc , student) => acc + student.marks,0);
console.log(totalMarks);

