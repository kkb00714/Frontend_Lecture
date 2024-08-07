// var el = document.getElementById("brand-title");

// console.log(el);

// console.log(el.innerHTML);
// console.log(el.innerText);

// el.innerText = "안녕하세요 :)"

// var el = document.getElementsByClassName('sub-title');

// console.log(el);


/* 
    이벤트

    - 폼 이벤트 
        => 사용자가 제출, 초기화 하는 이벤트

    - 마우스 이벤트
        => 클릭, 더블클릭, 마우스 이동

    - 키보드 이벤드
        => keydown, keypress, keyup 이벤트 

    ex) on + 이벤트 타입
*/


var el = document.getElementById('brand-title');

var myfunc = function () {
    alert('EventListner 실행!!');
};

el.addEventListener("click", myfunc);





