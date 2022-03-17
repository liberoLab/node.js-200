const abs1 = Math.abs('-1'); //1
const abs2 = Math.abs(-3.141592); //3.141592
const abs3 = Math.abs([2]); //2
const abs4 = Math.abs([1,2]); //NaN 배열의 수가 1개를 초과할 경우 NaN 출력
const abs5 = Math.abs({}); //NaN 객체 리터럴 이므로 NaN 출력
const abs6 = Math.abs(null); //0 으로 인정 되는 예외
const abs7 = Math.abs(''); //0 으로 약속 됨
const abs8 = Math.abs([]); //0 으로 약속 됨

console.log('abs1:', abs1);
console.log('abs2:', abs2);
console.log('abs3:', abs3);
console.log('abs4:', abs4);
console.log('abs5:', abs5);
console.log('abs6:', abs6);
console.log('abs7:', abs7);
console.log('abs8:', abs8);