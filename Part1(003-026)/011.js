//NaN = Not a Number 숫자인지 판단해줌

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234'); //책에 오류있음. 논리 연산이 아니라서 숫자 취급. 산술형 연산은 숫자 취급, 논리 연산은 문자 취급.
const isNaNHello = isNaN('Hello');

console.log(`isNaN123: ${isNaN123}`);
console.log(`isNaNMinus123: ${isNaNMinus123}`);
console.log(`isNaN234: ${isNaN234}`);
console.log(`isNaNHello: ${isNaNHello}`);
