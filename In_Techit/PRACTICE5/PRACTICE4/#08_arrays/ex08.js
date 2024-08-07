/*
    배열 (Array)
    => 복수의 데이터를 순서대로 담고 있는 자료구조

    - 배열의 순서는 0부터 시작
    - 배열은 객체 !
    - 키 => 인덱스, 값 => 요소
*/

var mbti = ['INFP', 'ENFJ', 'ISTJ', 'ESFP'];
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[4] = 'INTJ';
// console.log(mbti);
// console.log(mbti.length);

// mbti[2] = 'ISTP';
// console.log(mbti);
// console.log(mbti.length);


// push()
// console.log(mbti.push('INTJ', 'ISTP'));


// 스프레드 문법
// var newMbti = [...mbti, 'INTJ', 'ISTP']
// console.log(mbti);
// console.log(newMbti);


// pop()
// console.log(mbti.pop());
// console.log(mbti);

// shift()
// 앞쪽에 위치한 요소를 제거한 후 반환
// console.log(mbti);
// console.log(mbti.shift());
// console.log(mbti);


// slice()
// console.log(mbti.slice(0, 2));
// console.log(mbti.slice());
// console.log(mbti.slice(-1));

// join()
// 문자열 구분자를 지정
// console.log(mbti.join());
// console.log(mbti.join('-'));
// console.log(mbti.join('||'));
// console.log(mbti.join(''));


// sort()
// 알파벳 순서대로 정렬 (오름차순)
console.log(mbti.sort());

// reverse() 
// sort와 반대로 내림차순으로 정렬
console.log(mbti.reverse());


