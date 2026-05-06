// 객체
// 원시 타입이 아닌 객체 타입의 자료형
// 객체를 이용하면 현실 세계에 존재하는 어떤 사물이나 개념 표혆하기 용이함

// 예시
// let person = {
//     name: "이정환",
//     nickname: "winterlood", 
//     age: 27,
//     location: "목동",
// }

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = { // key : value
    name : "이정환",
    age : 27,
    hobby : "테니스",
    job : "FE Developer",
    extra : {},
    10 : 20,
    "like cat" : true, // 띄어쓰기 있으면 따옴표로 묶기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; //존재하지 앟는 프로퍼티에 접근하면 undefined 나옴
console.log(name);

let age = person["age"] //쌍따옴표와 함께 문자열로 접근해야함.
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person["favoriteFood"] = "초콜릿";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);