/*
    함수(functions)

    - 작업의 묶음
    - 코드를 반복해서 작성하는 비효율을 줄임
*/

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(10, 2));

// var result = multiply(432, 21);
// console.log(result);



// 함수 표현식
// var multiply = function calc (a, b) {
//     return a * b;
// };
// console.log(multiply(10, 5));
// console.log(calc(10, 5)); // 에러


/*
    변수 키워드 - var, let, const
*/


// Case 1

// var a = 10;

// while (true) {
//     var a = 1000;
//     break;
// }
// console.log(a);


// Case 2 - 호이스팅
// 

// console.log(word);

// word = "holy jolly christmas!";

// console.log(word);

// var word;


// let

// let a = 10;

// while (true) {
//     let a = 1000;
//     break;
// }

// console.log(a);


// const
// const로 선언한 변수는 덮어쓰기가 안됨!
// 대부분 const로 선언한 변수들은 대문자로 작성함


// const b = 7;
// console.log(b);

// b = 3;

// const PI = 3.14;

// const로 선언된 변수에 할당된 객체

// const student = {
//     grade: 1,
//     class: 3
// };

// student에 객체를 변경하는 것을 가능하지만
// 새로운 객체를 대입하려고 하는 것은 안됨
// student.grade = 2;
// console.log(student);

// student = {
//     num: 2111,
//     grade: 2
// }

// console.log(student);


// 화살표 함수

// let plus = (a, b) => {
//     return a + b;
// }

// let minus = (c, d) => c - d;

// console.log(plus(7, 14));
// console.log(minus(14, 7));


// let print = word => {
//     console.log(word);
// };
// print("Hello!");


// 파라미터가 없는 함수일 때
let myfunc = () => { // 어떤 값을 return 할지 작성
    return '굿모닝 에부리봐디';
}

console.log(myfunc());



