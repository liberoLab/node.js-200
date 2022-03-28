//1초에 한번씩 'hello'출력 하기
const playInterval = setInterval(() => console.log('hello'), 1000);

//5번 출럭하고 끝내기
setTimeout(() => {
  clearInterval(playInterval);
}, 5000);
