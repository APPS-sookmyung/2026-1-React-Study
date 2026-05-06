//자료형(Type) = 집합
//: 동일한 속성이나 특징을 가진 원소들을 묶은 것
//  ex. 고양이와 강아지는 "동물"이라는 집합으로 묶임
//String type, Number type
//원시 타입(기본형 타입. 프로그래밍에 있어 가장 기본적인 값들의 타입): Number, Stirng, Boolean, Null, Undefined
//객체 타입: Object -> Array, Function, RegexExp

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); //나머지 연산(모듈러 연산)

let inf = Infinity; //양의 무한대
let mInf = -Infinity; //음의 무한대

let nan = NaN; //수치 연산 실패했을 때 결과값

console.log(1 * "hello"); //NaN

//2. String Type
let myName = "이정환"; //문자형: 작은 따옴표 or 큰 따옴표 붙이기
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce); //이정환목동

//2. String Type -탬플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; //백틱
console.log(introduceText); //문자열을 동적으로 포함시킬 수 있음.

// 3. Boolean Type
//상태 표현할 때 주로 사용
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none); //undefined 출력

//undefined: 값이 할당되지 않았을 때 자동으로 할당 됨
//null: 개발자가 명시적으로 "값이 없다"라고 할 때 할당하는 값