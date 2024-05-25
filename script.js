//console.log('HELLO');
//Commentary
//alert('Hello');

var a = 10;
var b;
b=100;
console.log(a+b);
console.log(a*b/a);

console.log(7%2);
console.log(5%3);
console.log(3%2);
console.log(7%4);
// % : 나머지 연산자

console.log(7 >= 7);
console.log(3 <= 3);
console.log(3 == 3);
console.log(7 != 7);
console.log(7 === '7'); //자료의 형태까지 체크
console.log('7'+ 2);

인사 = 'hello';
console.log(인사);

console.log(7+parseInt('2',10));
console.log((3).toString());

var name = 'YURI'; //따옴표가 없으면 텍스트로 인식 X
console.log(`안녕하세요,${name}`);
console.log(`안녕하세요,`+ name); //병합을 해야해서 오래걸림

var p = 'cat dog hamster alligator';
console.log(p.indexOf('dog'));
console.log(p.indexOf('cat'));