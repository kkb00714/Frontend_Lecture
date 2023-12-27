/* 
    제어문 (control flow)
    1. 조건문
    2. 반복문
*/

var a = 5;

// 1. if ... else

if (a > 2) {
    console.log('a > 2');
} else {
    console.log('a <= 2');
}


// 2. if ... else if ... else

if (a > 2) {
    console.log('a > 2');
} else if (a == 2) {
    console.log('a = 2');
} else {
    console.log('a < 2');
}


// 3. switch

var mbti = 'ENFJ';
var val;

switch (mbti) {
    case 'INFP':
        val = 'INFP 입니다.';
        break;
    case 'ENFJ':
        val = '쿼카입니다.';
        break;
    case 'ISTJ':;
        val = '고양이 입니다';
        break;
    default: 
        val = '유효한 값이 아닙니다'
}

console.log(val);
