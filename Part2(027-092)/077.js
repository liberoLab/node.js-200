const string = '(<h1>:::특별가 - 99,000원:::<h1>)';

//[] 괄호 안에서 넣은 문자들을 모두 찾는다.
const replacedBracket = string.replace(/[()]/g, '');
const replaceBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');

console.log('바꾸기 전 ---->', string);
console.log('()없애기 ---->', replacedBracket);
console.log('()-없애기 ---->', replaceBracketOrSlashHyphenComma);
