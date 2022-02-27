const today = new Date();
//월을 1부터 세지 않고 0부터 세기 때문에 9월을 표시하고 싶다면 9-1로 작성해야 함.
const date1 = new Date(2017, 9 - 1, 2);
const date2 = new Date(2017, 8, 3);
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

//책 예제는 24시간으로 출력되어 있는데 2022-02-28 기준 오전/오후로 출력 됨.
console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
