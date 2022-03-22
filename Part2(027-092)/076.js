const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </d><h2>99,000원</h2>';
const replaceH1 = string.replace(/<.{0,1}h1>/g, '');
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');
/*
<.{0,1}h1> 는 h1 앞에 0개나 1개의 글자가 있을 수 있다는 뜻.
<.{0,4}> 는 <> 안에 0~4글자가 있을 수 있다 라는 뜻.
*/
console.log(replaceH1);
console.log(replaceTags);
