const studentList = [
  { name: 'kyeongrok', age: 31, math: 85, englishe: 87 },
  { name: 'jihyun', age: 31, math: 95, englishe: 97 },
  { name: 'minsup', age: 35, math: 76, englishe: 84 },
  { name: 'dasom', age: 35, math: 84, englishe: 73 },
  { name: 'yuna', age: 26, math: 54, englishe: 67 },
  { name: 'mattheue', age: 29, math: 34, englishe: 100 },
];

studentList.sort((beforeStudent, nextStudent) => {
  if (beforeStudent.age > nextStudent.age) return 1;
  else if (beforeStudent.age < nextStudent.age) return -1;
  else if (beforeStudent.math > nextStudent.math) return -1;
  else if (beforeStudent.math < nextStudent.math) return -1;
  return 0;
});

console.log(studentList);
