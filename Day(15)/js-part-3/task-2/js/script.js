let employees = [
    {
        id: 1,
        name: "Ahmed",
        age: 22,
        salary: 6000,
        department: "IT",
        active: true
    },
    {
        id: 2,
        name: "Sara",
        age: 27,
        salary: 8500,
        department: "HR",
        active: true
    },
    {
        id: 3,
        name: "Ali",
        age: 20,
        salary: 4500,
        department: "IT",
        active: false
    },
    {
        id: 4,
        name: "Mona",
        age: 30,
        salary: 10000,
        department: "Finance",
        active: true
    },
    {
        id: 5,
        name: "Omar",
        age: 24,
        salary: 7000,
        department: "Marketing",
        active: false
    },
    {
        id: 6,
        name: "Youssef",
        age: 29,
        salary: 12000,
        department: "IT",
        active: true
    }
];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

for (let employee of employees) {
    console.log(employee.name);
}

employees.forEach((employee) => {
    console.log(employee.name);
});

for (let index in employees) {
    console.log(index);
}

for (let employee of employees) {
    if (employee.active === true) {
        console.log(employee.name);
    }
}

let welcome = (name) => {
    return "Welcome " + name;
};

let employee = employees[0];

let { name, salary } = employee;

let newEmployee = {
    ...employee,
    country: "Egypt"
};

console.log(
    `${employee.name} works in ${employee.department} and earns${employee.salary}`
);

let employeeNames = employees.map((employee) => {
    return employee.name;
});

let salaries = employees.map((employee) => {
    return employee.salary;
});

let employeeInfo = employees.map((employee) => {
    return `${employee.name} (${employee.department})`;
});

let newSalaries = employees.map((employee) => {
    return {
        ...employee,
        salary: employee.salary + 1000
    };
});

let highSalary = employees.filter((employee) => {
    return employee.salary > 7000;
});

let itEmployees = employees.filter((employee) => {
    return employee.department === "IT";
});

let activeEmployees = employees.filter((employee) => {
    return employee.active === true;
});

let youngEmployees = employees.filter((employee) => {
    return employee.age < 25;
});


let firstHighSalary = employees.find((employee) => {
    return employee.salary > 9000;
});

let firstHR = employees.find((employee) => {
    return employee.department === "HR";
});

let firstInactive = employees.find((employee) => {
    return employee.active === false;
});

let employee100 = employees.find((employee) => {
    return employee.id === 100;
});

let firstLetters = employees.map((employee) => {
    return employee.name[0];
});

let numbers = [5, 12, 8, 20, 15, 30, 3, 40];

let greaterThan10 = numbers.filter((num) => {
    return num > 10;
});

let doubledNumbers = numbers.map((num) => {
    return num * 2;
});

let firstGreaterThan25 = numbers.find((num) => {
    return num > 25;
});
