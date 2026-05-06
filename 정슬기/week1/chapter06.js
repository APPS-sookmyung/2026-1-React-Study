//형변환: 어떤 값의 타입을 다른 타입으로 변경하는 것(Type Casting)
//ex)Number Type -> String Type
//묵시적 형 변환(암묵적 형변환): 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환 하는 것을 말함
//명시적 형 변환: 개발자가 직접 함수 등을 이용해 형 변환을 일으킴

// 1. 명시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result); //1020

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); //Number(): 내장함수
console.log(10 + strToNum1); //20

let str2 = "10개"; //숫자가 앞쪽에 있어야함.
let strToNum2 = parseInt(str2);

console.log(strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");