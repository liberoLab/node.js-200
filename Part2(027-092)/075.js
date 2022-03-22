const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const result1 = string.replace(/<..>/g, ''); //<..> = <>안에 2글자가 있는 문자열을 의미
const result2 = string.replace(/<.../g, ''); //<... = < 는 < + 세글자 문자열 의미

console.log('<..>:', result1);
console.log('<...:', result2);
