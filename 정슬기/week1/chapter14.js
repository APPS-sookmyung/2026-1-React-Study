//스코프
//변수나 함수에 접근하거나 호출할 수 있는 범위

//예시 코드
// function funcA() {
//     let a = 1;
// }

// console.log(a); //오류 발생: a라는 변수를 모릅니다.(접근 불가능)

// 스코프
// -> 전역(전체 영역) 스코프 . 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA() {
    let b = 2; //지역 스코프
    console.log(a);
}

funcA();
//console.log(b); //b is not defined (error 발생)

if(true) {
    let c = 1; //지역 스코프 (블록 내 변수는 모두 지역 스코프)
    //function funcB() {} //지역 스코프 X (함수 안에서만 지역 스코프 가능)
}

for (let i = 0; i < 10; i++) {
    let d = 1;
}

//console.log(d); //d is not defined (error 발생)

