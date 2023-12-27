/*
    예외(에러) 처리

*/

try {

    // 에러가 발생할 가능성이 있는 코드
    // myfunc();
    throw new Error("비밀번호 노출!")
} catch (error) { // er은 에러 변수로 사용
    
    // 에러가 발생했을 때 실행되는 코드
    console.log("아래와 같은 에러 발생");
    console.log(error);
} finally {
    
    // 에러 발생여부와 상관없이 무조건 실행
    console.log("무조건 실행");
}


