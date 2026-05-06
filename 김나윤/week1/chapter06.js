//형변환(Type Casting) : 어떤 값의 타입을 다른 타입으로 변경하는 것


// 1. 묵시적 형 변환
// -> 개발자가 직접 설명하지 않아도 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;  //1020
// 오류를 발생시키지 않기 위해 묵시적으로 num이 string으로 바뀜.

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개"; // 숫자만 포함돼있지 않는 문자열
let strToNum2 = parseInt(str2); // 숫자가 앞쪽에 있어야함.

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");