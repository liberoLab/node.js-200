//process
console.log(process.env); //컴퓨터 환경과 관련 정보를 가지 객체
console.log('--------------------');
console.log(process.arch); //프로세서의 아키텍쳐
console.log('--------------------');
console.log(process.uptime()); //현재 프로그램이 실행된 시간
console.log('--------------------');
console.log(process.memoryUsage()); //메모리 사용 정보를 가진 객체
console.log('--------------------');

/* 아래 코드는 오류가 남
console.log(process.version()); //Node.js 버전
console.log('--------------------');
console.log(process.versions()); //Node.js 버전
console.log('--------------------');
*/

//수정 버전
const { version } = require('process');
console.log(`Version: ${version}`);
console.log('--------------------');
const { versions } = require('process');
console.log(versions);
console.log('--------------------');

//console
console.log('Number: %d + %d = %d', 1, 2, 3 + 4);
console.log('String: %s', 'Hello Word!');
console.log('Json: %j', { name: 'node.js' });
console.log('String1', 'String2.');