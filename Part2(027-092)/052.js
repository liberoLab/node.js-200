const studentList = [
    { name: 'kyeongrok', age: 31, math: 85, science: 75 },
    { name: 'jihyun', age: 31, math: 95, science: 83 },
    { name: 'minsup', age: 35, math: 76, science: 98 },
];

const plus = (a, b) => a + b;
studentList.forEach(studen => console.log(`${studen.name} total: ${plus(studen.math, studen.science)}`));

console.log("--------------------");

studentList.forEach((student) => {
    console.log(`${student.name} total: ${plus(student.math, student.science)}`);
})