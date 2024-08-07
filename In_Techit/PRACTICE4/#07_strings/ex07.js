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

// 문자열 함수

var abc = "Hi, I am S__now Man."

// indexOf()
// 문자열의 특정 값이 시작되는 위치를 알려줌
console.log(abc.indexOf("Man")); 

// slice()
// 문자열의 일부를 잘라낼 때 사용
console.log(abc.slice(0, 4)); 

// toUpperCase(), toLowerCase()
// 각각 대문자, 소문자로 변환

console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startWith(), endsWith()
// 
var efg = 'This is my car.'
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th')); // 대소문자를 구분함

console.log(efg.endsWith('car'));
console.log(efg.endsWith('car.'));


// includes()

console.log(efg.includes('is'));