const studentList = [
  { name: 'kyeongrok', age: 31, math: 85, englishe: 87 },
  { name: 'jihyun', age: 31, math: 95, englishe: 97 },
  { name: 'minsup', age: 35, math: 76, englishe: 84 },
  { name: 'dasom', age: 24, math: 84, englishe: 73 },
  { name: 'yuna', age: 26, math: 54, englishe: 67 },
  { name: 'mattheue', age: 29, math: 34, englishe: 100 },
];

const sorted = studentList.sort((now, next) => now.math - next.math);
console.log('sorted', sorted);
const reversed = sorted.reverse();
console.log('reversed:', reversed);
const sliced = reversed.slice(0, 3);
console.log('sliced:', sliced);
