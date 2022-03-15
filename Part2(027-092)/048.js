//함수 선언식(Function declaration)
function printMessage(message) {
    console.log(message);
}

//함수 표현식(Function expression)
const printWelcome = function () {
    console.log('welcom');
}

printMessage('bey');
printWelcome();

console.log('typeof printMessage: %s', typeof printMessage);
console.log('typeof printMessage: %s', typeof printWelcome);

//괄호를 쓰지 않고 변수에 할당하면 해당 변수는 함수로 선언 됨
const pm = printMessage;
pm('good moring');
console.log('typeof pm: %s', typeof pm);