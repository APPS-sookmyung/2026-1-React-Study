//객체2

// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};
//상수여서 const animal = { a: 1  }; ->다른 객체를 생성해서 할당하는 건 오류

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드 선언, 보통 객체의 동작을 정의.
  // sayHi : function() {console.log("안녕!"); }
  //sayHi : () => {console.log("안녕!"); }
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
