const dateString = '2017-08-24 11:00:00';

//split
/*
아래와 같이 코드를 짜면 공백을 기준으로 배열에 담긴다.
즉 ['2017-08-24', '11:00:00'] 라는 배열이 되고 원하는 값을 선택하게 되면 해당 값이 출력된다.
*/const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];

//print
console.log('date : %s',date);
console.log('time : %s',time);

const result = 'abc'.split('b');
console.log('result:',result);