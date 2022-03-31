const numbers = [3, 6, 2, 8, 1];
const strings = [
  'timeoutsremaining',
  'flagrantFouls',
  'defensive3Seconds',
  'jumpshots',
  'dunks',
  'layups',
];

const sortedNumbers = numbers.sort(); //오름차순 정렬
const sortedStrings = strings.sort();

console.log('sortedNumbers:', sortedNumbers);
console.log('sortedNumbersDesc:', sortedNumbers.reverse()); //내림차순 정렬
console.log('sortedStrings:', sortedStrings);
console.log('sortedStringsDesc:', sortedStrings.reverse());
