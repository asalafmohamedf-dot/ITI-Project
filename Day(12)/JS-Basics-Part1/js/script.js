// Variables
var username = "Asala";
var age = 20;
console.log(username);
console.log(age);


// If
var grade = window.prompt("enter the grade")
if (grade >= 90) {
    console.log("Excellent");
}
else if (grade >= 80) {
    console.log("Good");
}
else if (grade >= 70) {
    console.log("Average");
}
else if (grade >= 60) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


// (For Loop)
for (var i = 1; i <= 5; i++) {
    console.log(i);
}


// While Loop
var number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}


// Do While
var x = 1;
do {
    console.log(x);
    x++;
} while (x <= 5);


// Function
function sayHello() {
    console.log("Hello JavaScript");
}
sayHello();


// Function 
function add(a, b) {
    console.log(a + b);
}
add(10, 5);


// Object
var person = {
    fullName: "asala",
    age: 20,
    gender: "feMale",
    job: "Engineer",
    salary: 3500,
    city: "cairo",
    isStudent: true,

    sister: {
        fullName: "hager",
        age: 28,
        gender: "Female"
    },

    eat: function (feMale) {
        console.log(`Eating ${feMale}`);
    }
};

console.log(person.fullName);
console.log(person.sister.fullName);
console.log(person.sister.age);

person.eat("Pizza");
person.eat("Kiwi");

