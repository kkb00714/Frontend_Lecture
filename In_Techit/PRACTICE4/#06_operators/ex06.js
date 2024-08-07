/*
    연산자
    => 1개의 표현식에 대해 
    산술, 대입, 논리, 타입 등을 평가하여 값을 생성하는 작업

*/

// 1. 산술 연산자

var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // 나누기 (몫 반환)
console.log(a % b); // 모듈러 연산 (나머지 값 반환)

console.log(a);
console.log(b);


var c = 7;
console.log(++c); // 변수에 1을 먼저 더하는 것이 우선순위. 따라서 1을 더한 값이 출력됨

var d = 7;
console.log(d--); // 1을 빼는 것보다 변수를 먼저 출력하는 것이 우선순위. 따라서 먼저 값을 출력한 이후 1을 뺌
console.log(d); 

// 2. 대입 연산자, 할당 연산자

var e = 2;
e = 10; // 할당 연산자
console.log(e);

console.log(e += 3); // e = e + 3 의미.
console.log(e -= 3); // e = e - 3 의미.
console.log(e *= 3); // e = e * 3 의미.
console.log(e /= 3); // e = e / 3 의미.
console.log(e %= 3); // e = e % 3 의미.


// 3. 비교 연산자

console.log(2 == 2); 
console.log(2 == "2"); // 자동으로 타입을 일치시킨 후 비교함 (암묵적 형변환)
console.log(2 === "2"); // 타입까지 비교할 수 있는 연산자

console.log(2 != 2); // false
console.log(2 !== "2"); // false
console.log(2 !== "2"); // true

console.log(4 > 2);
console.log(4 < 2);
console.log(4 >= 2);
console.log(4 <= 2);


// 4. 논리 연산자

// 논리합(or) (||)
// 피연산자 중에 하나라도 참이면 참을 반환

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

console.log(2 > 3 || 5 == 5); // true
 // 비교연산자부터 먼저 연산 후, 가장 마지막에 논리연산을 함

// 논리곱(and)
// 피연산자 모두가 참이어야 참

console.log(true && true); // true
console.log(true && false); // false
console.log(true && false && false); // false
console.log(false && false); // false

console.log(2 > 3 && 5 == 5); // false
console.log(2 < 3 && 5 == 5); // true

// 부정(not)
// 피연산자의 boolean 값을 부정

console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 4)); // false

console.log(!(2 < 3 && 5 == 5)); // false


// 5. typeof 연산자

console.log(typeof 1); // number
console.log(typeof "1"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object




