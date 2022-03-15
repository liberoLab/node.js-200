const students = [
    { name: 'kyeongrok', age: 31, score: 85 },
    { name: 'jihyun', age: 31, score: 95 },
    { name: 'minsup', age: 35, score: 85 }
];

function getDegree(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    }
    return 'F';
}

//forEach로 배열 수 만큼 함수를 돌린 후 result에 값을 넣은 후 출력
students.forEach((students) => {
    const result = `name: ${students.name}, score: ${getDegree(students.score)}`;
    console.log(result);
});