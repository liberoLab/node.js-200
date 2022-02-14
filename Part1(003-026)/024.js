const a = 5
const b = 6

if (a == 5) {
    console.log(a == 5)
    console.log(a == b)
    console.log(a == '5')
}
if (a === 5) {
    console.log(a === 5)
    console.log(a === b)
    console.log(a === '5')
}

// 조건이 맞지 않으므로 출력되지 않고 넘어감
if (a > b) {
    console.log(a > b)
}

if (a < b) {
    console.log(a < b)
}

if (a >= 5) {
    console.log(a >= 5)
    console.log(a >= b)
}

if (a <= 5) {
    console.log(a <= 5)
    console.log(a <= b)
}