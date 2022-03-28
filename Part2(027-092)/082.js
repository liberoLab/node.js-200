const studentList = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'kyeongrok', age: 31, score: 85 },
];

console.log(studentList[0]);

const student1 = { name: 'yuna', age: 26, score: 85 };
studentList.push(student1); //student1을 studentList에 넣기

console.log(studentList);

studentList.pop(); //맨 마지막에 넣은 student1을 리스트에서 제거, pop은 배열에서 마지막 요소를 제거한다
console.log(studentList);
