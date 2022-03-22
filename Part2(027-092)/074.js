/*
/정규표현식/g 을 사용 하면 문자열에서 해당하는 부분을 찾을 수 있다.
.replace()를 이용 해 해당 패던이 일치하면 빈칸으로 바꾸는 코드

변수 result1을 보면 중간에 역슬래쉬(\)가 들어가 있는데,
\는 연산자, 특수문자, 예약어 앞에 사용해서 연산자가 아니고 문자열이라고 알려주기 위해서 사용합니다.
</h1> 의 /는 특수 문자 이기 때문에 \를 사용해서 이스케이프(escape) 해준다.
이스케이프(escape)는 일반 문자열로 인식 하게 한다는 뜻이다.
*/

const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g, '');
console.log('result1:', result1);

const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');

console.log('result2:', result2);
