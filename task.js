//T-001**: Create an array of 5 elements using the Array Constructor.

const myArray = new Array(5);
console.log(myArray); // Output: [ <5 empty items> ]

//T-002**: Create an array of 3 empty slots.
const emptyArray = Array(3);
console.log(emptyArray); // Output: [ <3 empty items> ]

//T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
const literalArray = [10, 20, 30, 40, 50, 60];
const fourthElement = literalArray[literalArray.length - 3];
console.log(fourthElement); // Output: 40

//T-004**: Use the `for` loop on the above array to print elements in the odd index.
for (let i = 0; i < literalArray.length; i++) {
    if (i % 2 !== 0) {
        console.log(literalArray[i]); // Output: 20, 40, 60
    }
}
//T-005**: Add one element at the front and the end of an array.
literalArray.unshift(5); // Add at the front
literalArray.push(70); // Add at the end
console.log(literalArray); // Output: [5, 10, 20, 30, 40, 50, 60, 70]

//T-006**: Remove an element from the front and the end of an array.
literalArray.shift(); // Remove from the front
literalArray.pop(); // Remove from the end
console.log(literalArray); // Output: [10, 20, 30, 40, 50, 60]
//T-007**: Create an array containing the name of your favourite foods(10 foods).Destructure the 6th food element from the array using destructuring
const favoriteFoods = ['Pizza', 'Sushi', 'Burgers', 'Pasta', 'Ice Cream', 'Tacos', 'Salad', 'Steak', 'Curry', 'Dumplings'];
console.log(favoriteFoods); // Output: ['Pizza', 'Sushi', 'Burgers', 'Pasta', 'Ice Cream', 'Tacos', 'Salad', 'Steak', 'Curry', 'Dumplings']
const [, , , , , sixthFood] = favoriteFoods;
console.log(sixthFood); // Output: Tacos

//T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [firstFood, ...lastEightFoods] = favoriteFoods;
console.log(lastEightFoods); // Output: ['Sushi', 'Burgers', 'Pasta', 'Ice Cream', 'Tacos', 'Salad', 'Steak', 'Curry', 'Dumplings']

//T-009**: Clone an Array(Shallow cloning)
const arr = [
  [1, 2],
  [3, 4]
];

const clone = [...arr];

console.log(clone);       // [[1,2],[3,4]]

//T-010**: Empty an array using its length property
const numbers = [1, 2, 3, 4, 5];
numbers.length = 0;
console.log(numbers); // Output: []

//T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
const numbers1 = [];

for (let i = 1; i <= 10; i++) {
  numbers1.push(i);
}

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === 5) {
    numbers1.length = 6;  // Resize array
    break;               // Stop the loop
  }
}

console.log(numbers1);

//T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
const arr1 = [1,2,3,4,5,6,7,8,9,10];
arr.splice(0, arr1.length);
console.log(arr1); // Output: []

//T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?
const arr2 = [1,2,3,4,5,6,7,8,9,10];
// Using length property
arr2.length = 0;
console.log(arr2); // Output: []
// Using pop() method
const arr3 = [1,2,3,4,5,6,7,8,9,10];
while (arr3.length) {
    arr3.pop();
}
console.log(arr3); // Output: []
// Using shift() method
const arr4 = [1,2,3,4,5,6,7,8,9,10];
while (arr4.length) {
    arr4.shift();
}
console.log(arr4); // Output: []
// Using setting the array with []
let arr5 = [1,2,3,4,5,6,7,8,9,10];
arr5 = [];
console.log(arr5); // Output: []
// Using splice() method
const arr6 = [1,2,3,4,5,6,7,8,9,10];
arr6.splice(0, arr6.length);
console.log(arr6); // Output: []
// The most efficient method is using the length property because it directly modifies the array's length without needing to iterate through the elements, making it faster for large arrays.

//T-014**: What happens when you concatenate two empty arrays?
const emptyArr1 = [];
const emptyArr2 = [];
const concatenatedArr = emptyArr1.concat(emptyArr2);
console.log(concatenatedArr); // Output: []

//T-015**: How can you check if a value is partially matching with any of the elements of an Array?
const fruits = ['apple', 'banana', 'grape', 'orange', 'pineapple'];
const searchValue = 'app';
const isPartialMatch = fruits.some(fruit => fruit.includes(searchValue));
console.log(isPartialMatch); // Output: true

//T-016**: What is the difference between the slice() and splice() methods?
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). It does not modify the original array.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.

//T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const alphanumericArray = ['b3', 'a1', 'c2', 'd4', 'e5'];
const ascendingSortedArray = [...alphanumericArray].sort();
const descendingSortedArray = [...alphanumericArray].sort().reverse();
console.log(ascendingSortedArray); // Output: ['a1', 'b3', 'c2', 'd4', 'e5']
console.log(descendingSortedArray); // Output: ['e5', 'd4', 'c2', 'b3', 'a1']
console.log(alphanumericArray); // Original array remains unchanged

//T-018**: Can you give examples of sparse and dense arrays?
// A dense array is an array where all elements are defined and there are no empty slots. For example:
const denseArray = [1, 2, 3, 4, 5];
console.log(denseArray); // Output: [1, 2, 3, 4, 5]
// A sparse array is an array that has empty slots or undefined elements. For example:
const sparseArray = [1, , 3, , 5];
console.log(sparseArray); // Output: [1, <1 empty item>, 3, <1 empty item>, 5]

//T-019**: Give a practical usages of the .fill() method
// The .fill() method can be used to initialize an array with a specific value. For example, creating an array of a fixed size filled with zeros:
const size = 5;
const filledArray = new Array(size).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

//T-020**: Give a practical usages of the .fill() method
// The .fill() method can be used to initialize an array with a specific value. For example, creating an array of a fixed size filled with zeros:
const size1 = 5;
const filledArray1 = new Array(size1).fill(0);
console.log(filledArray1); // Output: [0, 0, 0, 0, 0]

const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
  ];

    const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];

//T-021**: Can you filter employees who work in the "Engineering" department?
const engineeringDept = departments.find(dept => dept.name === "Engineering");
const engineeringEmployees = employees.filter(emp => emp.departmentId === engineeringDept.id);
console.log(engineeringEmployees);

//T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employeeDepartmentNames = employees.map(emp => {
    const department = departments.find(dept => dept.id === emp.departmentId);
    return `${emp.name} (${department.name})`;
});
console.log(employeeDepartmentNames);

//T-023**: Find the highest salary among employees.
const highestSalary = Math.max(...employees.map(emp => emp.salary));
console.log(highestSalary);

//T-024**: Check if there is at least one employee in the "Sales" department.
const salesDept = departments.find(dept => dept.name === "Sales");
const hasSalesEmployee = employees.some(emp => emp.departmentId === salesDept.id);
console.log(hasSalesEmployee);
//T-025**: Write a function to filter employees earning more than 6000.
threshold=6000;
function filterHighEarningEmployees(threshold) {
    return employees.filter(emp => emp.salary > threshold);
}
console.log(filterHighEarningEmployees(threshold));

//T-026**: Create an array of employee names only.
const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);

//T-027**: Calculate the total salary of all employees using the `reduce()` method.
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

//T-028**: Is there any employee earning less than 5000?
const hasLowEarningEmployee = employees.some(emp => emp.salary < 5000);
console.log(hasLowEarningEmployee);

//T-029**: Find the first employee who earns exactly 5100.
const employeeWithSalary5100 = employees.find(emp => emp.salary === 5100);
console.log(employeeWithSalary5100);

//T-030**: Find the last employee in the "HR" department.
const hrDept = departments.find(dept => dept.name === "HR");
const hrEmployees = employees.filter(emp => emp.departmentId === hrDept.id);
const lastHrEmployee = hrEmployees[hrEmployees.length - 1];
console.log(lastHrEmployee);

//T-031**: Find the first employee in the "Marketing" department.
const marketingDept = departments.find(dept => dept.name === "Marketing");
const firstMarketingEmployee = employees.find(emp => emp.departmentId === marketingDept.id);
console.log(firstMarketingEmployee);

//T-032**: Check if all employees earn more than 4000.
const allEarnMoreThan4000 = employees.every(emp => emp.salary > 4000);
console.log(allEarnMoreThan4000);

//T-033**: Find the first employee in the "Sales" department.
const firstSalesEmployee = employees.find(emp => emp.departmentId === salesDept.id);
console.log(firstSalesEmployee);

//T-034**: Verify if all employees belong to a department listed in the departments array.
const allEmployeesInDepartments = employees.every(emp =>
    departments.some(dept => dept.id === emp.departmentId)
);
console.log(allEmployeesInDepartments);

//T-035**: Log each employee's name and department name to the console.
employees.forEach(emp => {
    const department = departments.find(dept => dept.id === emp.departmentId);
    console.log(`${emp.name} works in ${department.name}`);
});

//T-036**: Extract all employee names into a single array.

const allEmployeeNames = employees.map(emp => emp.name);

console.log(allEmployeeNames);

//T-037**: Increment each employee's salary by 10%
const updatedSalaries = employees.map(emp => ({
    ...emp,
    salary: emp.salary * 1.10
}));
console.log(updatedSalaries);

//T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const employeesWithSkills = [
    { name: "Alice", skills: ["Excel", "Management"] },
    { name: "Bob", skills: ["JavaScript", "React"] },
    { name: "Charlie", skills: ["SEO", "Content Writing"] },
    { name: "Diana", skills: ["Recruitment", "Onboarding"] },
    { name: "Edward", skills: ["Python", "Django"] },
    { name: "Fiona", skills: ["Negotiation", "CRM"] },
    { name: "George", skills: ["Social Media", "Branding"] },
    { name: "Helen", skills: ["Sales Strategy", "Lead Generation"] },
    { name: "Ian", skills: ["DevOps", "AWS"] },
    { name: "Jane", skills: ["Employee Relations", "Compliance"] },
];
const allSkills = employeesWithSkills.flatMap(emp => emp.skills);
console.log(allSkills);

//T-039**: Find the total salary of all employees working in the "Engineering" department.
const totalEngineeringSalary = employees
    .filter(emp => emp.departmentId === engineeringDept.id)
    .reduce((total, emp) => total + emp.salary, 0);
console.log(totalEngineeringSalary);

//T-040**: Check if there is any department where all employees earn more than 5000.
const departmentWithAllHighEarners = departments.find(dept => {
    const deptEmployees = employees.filter(emp => emp.departmentId === dept.id);
    return deptEmployees.every(emp => emp.salary > 5000);
});
console.log(departmentWithAllHighEarners);

//T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).Find the total number of unique projects being handled across all employees.
const employeesWithProjects = [
    { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
    { id: 2, name: "Bob", projects: ["Project C"] },
    { id: 3, name: "Charlie", projects: ["Project D", "Project E"] },
    { id: 4, name: "Diana", projects: [] },
    { id: 5, name: "Edward", projects: ["Project F"] },
    { id: 6, name: "Fiona", projects: ["Project G", "Project H"] },
    { id: 7, name: "George", projects: ["Project I"] },
    { id: 8, name: "Helen", projects: ["Project J", "Project K"] },
    { id: 9, name: "Ian", projects: [] },
    { id: 10, name: "Jane", projects: ["Project L"] },
];
const allProjects = employeesWithProjects.flatMap(emp => emp.projects); // flatmap to get all projects 

const uniqueProjects = new Set(allProjects);

console.log(uniqueProjects.size); // Output: total number of unique projects

//T-042**: For each employee, find their department name and return an array of employee names with their department names.
const employeeNamesWithDepartments = employees.map(emp => {
    const department = departments.find(dept => dept.id === emp.departmentId);
    return `${emp.name} (${department.name})`;
});
console.log(employeeNamesWithDepartments);

//T-043**: Get a list of names of employees earning more than 6000.

const highEarningEmployeeNames = employees
    .filter(emp => emp.salary > 6000)
    .map(emp => emp.name);
console.log(highEarningEmployeeNames);

//T-044**: Write a for-of loop to print the names of all employees from the employees array.
for (const emp of employees) {
    console.log(emp.name);
}
//T-045**: Using a for-of loop, print the names of employees earning more than 5000.
for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 5000) {
    console.log(employees[i].name);
  }
}

//T-047**: Write a for-of loop to match employees with their departments and print the results.
for (const emp of employees) {
    const department = departments.find(dept => dept.id === emp.departmentId);
    console.log(`${emp.name} works in ${department.name}`);
}

//T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
for (const [index, emp] of employees.entries()) {
    console.log(`Index: ${index}, Name: ${emp.name}`);
}

//T-049**: Given the array-like object below, access the second element and log it:

  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  
    console.log(arrayLike[1]); // Output: "Second"

//T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from. 
function argsToArray() {
    const argsArray = Array.from(arguments);
    return argsArray;
}
console.log(argsToArray(1, 2, 3, 4)); // Output: [1, 2, 3, 4]

//T-052**: Merge these two arrays into a single array:

  const arr7 = [1, 2];
  const arr8 = [3, 4];

    const mergedArray = [...arr7, ...arr8];
    console.log(mergedArray); // Output: [1, 2, 3, 4]

//T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const n = 5;
const duplicateAArray = Array.from({ length: n }, () => "A");
console.log(duplicateAArray); // Output: ["A", "A", "A", "A", "A"]

//T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']

//array.form uses length property to create array of specified length and fills it with values returned by the mapping function provided as second argument.