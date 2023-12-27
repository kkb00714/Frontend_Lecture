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