// 문자열 선언

// 큰 따옴표("") 혹은 작은 따옴표('')로 사용

var greeting = "hello!";
var farewell = 'Bye!';
var myname = '김철수';

var sentence = greeting + ' ' + myname;
var sentence2 = greeting + '\n' + myname; // 줄바꿈

console.log(sentence);
console.log(sentence2);

console.log(farewell + 2);


// 이스케이프 시퀀스
var sentence = greeting + '\\ 백슬래시 출력' + farewell;
console.log(sentence);

var sentence2 = greeting + '\t' + myname; // 탭(Tab)을 의미하는 \t
console.log(sentence2);

var sentence3 = greeting + '\"큰따옴표 출력하기\"' + myname; // 백슬래시를 사용하면 문자로서 사용할 수 있음
console.log(sentence3);


// 템플릿 리터럴(ES6)

// 일반적으로 백틱(``) 으로 표현
// 멀티라인 텍스트 작업 가능, 이스케이프 시퀀스가 필요하지 않음

var a = `안녕하세요옹`;
console.log(a);

var b = `안녕하세요옹
여러분   :)             ㅎㅎ`;
console.log(b);

var price = 1000;
var say = '이 물건은 ' + price + '원 입니다';
console.log(say);

var c = `이 물건은 ${price}원 입니다.`
console.log(c);

var d = `이 물건은 ${price + 500 + 180}원 입니다.`
console.log(d);

