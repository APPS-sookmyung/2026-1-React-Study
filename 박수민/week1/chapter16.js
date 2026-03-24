// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color: "black",
};

animal.age = 2; //추가
animal.name = "까망이"; //삭제
delete animal.color; //삭제

// 2. 메서드
// -> 값이 함수면 프로파티를 말함

const person = {
    name: "박수민",
//메서드 선언
    sayHi() {
        console.log("안녕!");
    },
}

person.sayHi();
person["sayHi"]();