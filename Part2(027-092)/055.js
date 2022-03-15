const randomNumber = Math.random(); //0.7483689112586123

/*
Math.random은 0이상 1미만 숫자를 램덤으로 생성 해준다. 그러므로 1이상의 수를 출력하고 싶으면 10을 곱해주고 소수점을 버리면 된다.
Math.floor 는 소수점을 버려주는 함수.
Math.floor(Math.random() * 10, 10) 의 ,뒤의 10은 10진수를 나타낸다
*/
const zeroToNine = Math.floor(Math.random() * 10, 10); //0 to 9

/*
20부터 30의 숫자를 생성하고 싶을 경우  (30 - 20) + 1 라고 작성한다.
+ 1을 해주는 이유는 (30-20)을 할 경우 숫자가 0~9 까지 9개만 생성되기 때문이다.
*/
const twentyToThhirty = Math.floor(Math.random() * ((30 - 20) + 1), 10) + 20; //20 to 30
const oneToTen = Math.floor(Math.random() * 10, 10) + 1; //1 to 10
const makeRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1), 10) + min;

console.log(randomNumber);
console.log('zeroToNine:', zeroToNine);
console.log('oneToTen:', oneToTen);
console.log('twentyToThirty:', twentyToThhirty);

for (let value = 1; value < 10; value += 1){
    console.log('10 to 20:', makeRandom(10, 20));
}