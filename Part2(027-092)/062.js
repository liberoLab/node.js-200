const log_1 = Math.log(10); //2.302585092994046
const log_2 = Math.log(1); //0

const log10_1 = Math.log10(10000); //4
const log10_2 = Math.log10(10); //1

const log2_1 = Math.log2(1024); //10
const log2_2 = Math.log2(2); //1

/*
log1p는 값에 1을 더한 로그값을 구하는 것이다.
log1p(x) = log(x+1)
만약 광장히 작은 숫자를 받는다면 log1 즉, 0에 매우 가까운 작은 값을 갖게 되므로 정밀 계산할 때의 값과 상대오차가 크게 발생하게 된다.
이럴때 log1p를 사용할 경우 문제 상황을 쉽게 발견 가능하다.
높은 정확도가 요구되는 경우에 사용.
*/
const log1p_1 = Math.log1p(1); //0.6931471805599453
const log1p_2 = Math.log1p(0); //0

console.log('log_1:', log_1);
console.log('log_2:', log_2);
console.log('log10_1:', log10_1);
console.log('log10_2:', log10_2);
console.log('log2_1:', log2_1);
console.log('log2_2:', log2_2);
console.log('log1p_1:', log1p_1);
console.log('log1p_2:', log1p_2);
