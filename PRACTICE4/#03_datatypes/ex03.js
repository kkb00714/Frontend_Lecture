/* 
자료형

1. 기본형, 단순형, 원시형
    - number
    - string
    - boolean
    - undefined
    - null
    - symbol

2. 참조형, 객체(Object)
*/

// number
// 정수(integer), 실수(float) 구분이 없음
var price = 10000;
console.log(price);

//string
// 
var myname = "김     수한무";
console.log(myname);

var yourname = '두루미와';
console.log(yourname);

var myname2 = "'거북이'";
// => 이 경우, 문자열의 일부로 인식하게 됨
console.log(myname2);

var yourname2 = "\"사자\""
// => \ () 텍스트로서의 큰따옴표를 사용할 수 있게 됨
console.log(yourname2);

// boolean
var isTrue = true;
var isFalse = false;
// 대소문자를 구분하므로, 소문자로 작성해야 함
console.log(isTrue);
console.log(isFalse);

// undefined 
// 변수가 선언만 되고, 초기화되지 않았을 때.
var a;
console.log(a);

// 



