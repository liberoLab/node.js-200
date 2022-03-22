//함수의 유효 범위(Scope) 및 익명함수

//전역 변수
let resultSubrtaction;
function subtraction(a, b) {
  resultSubrtaction = a - b;
}

subtraction(100, 50);
console.log(resultSubrtaction);

//변수에 익명함수 형대로 함수를 정의 할 수 있음
function multiple(a, b) {
  const result = a * b;
  return result;
}

const r = multiple(10, 10);
console.log(r);

//지역변수
function sum(a, b) {
  const resultSum = a + b;
}

sum(20, 30);
console.log(resultSum);
