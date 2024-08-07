// 각각 다르게 취급할 때에는 Symbol을 사용

var name1 = "김철수";
var name2 = "김철수";

console.log(name1 == name2);

var name3 = Symbol("김영희");
var name4 = Symbol("김영희");

console.log(name3 == name4);


// 객체에 사용할 때에는 아래와 같은 방식으로 사용

var myclass = {
    [Symbol("김철수")]: 1,
    [Symbol("김철수")]: 2
};