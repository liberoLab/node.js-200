const asin1 = Math.asin(0); //0
const asin2 = Math.asin(1); //1.5707963267948966
const asin3 = Math.asin(Math.PI / 2); //NaN
//Math.PI/2는 1을 넘기 때문에 정의역의 제한 범위를 넘기 때문에 값을 구할 수 없어서 NaN을 리턴함.
const acos1 = Math.acos(0); //1.5707963267948966
const acos2 = Math.acos(1); //0
const acos3 = Math.acos(-1.2); //NaN

const atan1 = Math.atan(Math.PI / 2); //1.0038848218538872

console.log('asin1:', asin1);
console.log('asin2:', asin2);
console.log('asin3:', asin3);
console.log('acos1:', acos1);
console.log('acos2:', acos2);
console.log('acos3:', acos3);
console.log('atan1:', atan1);
