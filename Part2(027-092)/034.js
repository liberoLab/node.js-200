const userList = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
];

//for of는 list에 있는 요소 개수 만큼 반복함
for (const user of userList) {
  console.log('user:', user);
}
