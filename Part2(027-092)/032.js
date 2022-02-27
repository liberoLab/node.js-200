for (let j = 2; j <= 9; j += 1) {
    console.log('=== %d단 시작 ===', j)
    for (let i = 1; i < 10; i++) {
        console.log('%d * %d = %d', j, i, j * i)
    }
}