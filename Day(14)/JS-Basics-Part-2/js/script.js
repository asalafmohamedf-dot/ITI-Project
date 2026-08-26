let students = [
    {
        id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Ali Hassan",
        age: 17,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];


console.log(students.length);
console.log(students[0].name);
console.log(students[students.length - 1].name);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

for (let i = 0; i < students.length; i++) {

    console.log("Name : " + students[i].name);
    console.log("Age : " + students[i].age);
    console.log("City : " + students[i].city);
    console.log("Grade : " + students[i].grade);
    console.log("================");
}

for (let i = 0; i < students.length; i++) {

    if (students[i].age > 18) {
        console.log(students[i].name);
    }

}

for (let i = 0; i < students.length; i++) {

    if (students[i].grade > 90) {
        console.log(students[i].name);
    }

}

for (let i = 0; i < students.length; i++) {

    if (students[i].isGraduated == true) {
        console.log(students[i].name);
    }

}

for (let i = 0; i < students.length; i++) {

    if (students[i].isGraduated == false) {
        console.log(students[i].name);
    }

}

let maxGrade = students[0].grade;

for (let i = 1; i < students.length; i++) {

    if (students[i].grade > maxGrade) {
        maxGrade = students[i].grade;
    }

}
console.log(maxGrade)

let minGrade = students[0].grade;

for (let i = 1; i < students.length; i++) {

    if (students[i].grade < minGrade) {
        minGrade = students[i].grade;
    }

}
console.log(minGrade);


let studentsname = [];

for (let i = 0; i < students.length; i++) {
    studentsname.push(students[i].name);
}
studentsname.sort();
console.log(studentsname);

studentsname.reverse();
console.log(studentsname);



for (let i = 0; i < students.length; i++) {

    console.log(students[i].name.toUpperCase());

}

for (let i = 0; i < students.length; i++) {

    console.log(students[i].name.toLowerCase());

}

for (let i = 0; i < students.length; i++) {

    if (students[i].name.includes("Ali")) {
        console.log(students[i].name + "Ali");
    }

}


for (let i = 0; i < students.length; i++) {

    let words = students[i].name.split(" ");

    console.log(words);

}


let testName = "   Mostafa Mohamed   ";

console.log(testName.trim());



for (let i = 0; i < students.length; i++) {

    console.log(students[i].skills.length);

}

students[0].skills.push("Bootstrap");
console.log(students[0].skills);


students[0].skills.pop();
console.log(students[0].skills);


for (let i = 0; i < students.length; i++) {

    if (students[i].skills.includes("JS")) {
        console.log(students[i].name + "JS");
    }

}


for (let i = 0; i < students.length; i++) {

    students[i].skills.reverse();

    console.log(students[i].skills);

}

for (let i = 0; i < students.length; i++) {

    students[i].skills.sort();

    console.log(students[i].skills);

}

for (let i = 0; i < students.length; i++) {

    console.log(Object.keys(students[i]));

}

for (let i = 0; i < students.length; i++) {

    console.log(Object.values(students[i]));

}

for (let i = 0; i < students.length; i++) {

    let grade = students[i].grade;

    if (grade >= 90) {
        console.log("Excellent");

    } else if (grade >= 80) {
        console.log("Very Good");

    } else if (grade >= 70) {
        console.log("Good");

    } else if (grade >= 60) {
        console.log("Pass");

    } else {
        console.log("Fail");
    }

}

for (let i = 0; i < students.length; i++) {

    if (students[i].age < 18) {
        console.log("Minor");
    } else {
        console.log("Adult");
    }

}

function getName(student) {

    return student.name;

}
console.log(getName(students[0]));

function getAge(student) {

    return student.age;

}
console.log(getAge(students[0]));


function getSkillsCount(student) {

    return student.skills.length;

}
console.log(getSkillsCount(students[0]));


console.log(Math.random());

console.log(Math.round(4.6));

console.log(Math.floor(4.9));

console.log(Math.ceil(4.1));

console.log(Math.max(10, 20, 30));

console.log(Math.min(10, 20, 30));

console.log(Math.pow(2, 3));