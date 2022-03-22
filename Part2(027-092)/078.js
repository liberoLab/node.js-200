const text = 'hello my name is kyeongrok';
const matched = text.match(/[a-l]{1,3}/g);
//[a-l]{1,3} = a~l 까지 1개 이상 3개 이하 문자열을 추출

console.log(matched);
