const user = { name: 'kyeongrok', age: 31 }
console.log('user:', user)
console.log('user.name:', user.name)
console.log('user.age:', user.age)

//user.변수 user에 정보를 추가
user.job = 'developer'
user.nation = 'korea'
console.log(user)

const memberName = 'age'
//uset[변수]로 해당 값만 호출
console.log(user[memberName])