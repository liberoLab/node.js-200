const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(1570274211107);
const timestampToInit = new Date(1);

console.log('Date to timestamp:', dateToTimestamp); //현재 시간의 타임스탬프
console.log('Timestamp to date:', timestampToDate); //특정 시간의 타임스탬프
console.log('Initial timestamp:', timestampToInit); //최초의 타임스탬프
