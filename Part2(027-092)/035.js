const listUser = [
  { name: 'kyeongrok', age: 31 },
  { name: 'jihyun', age: 31 },
  { name: 'minsup', age: 35 },
];

//forEach로 listUser의 요소를 한개씩 뽑아서 user 함수에 넣어준다.
listUser.forEach(function (user) {
  console.log(user);
});
console.log('--------------------');

//arrow function
listUser.forEach((user) => console.log(user));
