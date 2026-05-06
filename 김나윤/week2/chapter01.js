//Truthy와 Falsy

// 자바스크립트의 모든 값은 Truthy 하거나 Falsy함.
// -> 이를 이용해 조건문을 간결하게 만들 수 있음

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = ""; //빈 문자열 
let f7 = 0n; // BigInt의 0

// if (!f1) {  // true
//   console.log("falsy");
// }

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; //배열
let t4 = {}; //객체
let t5 = () => {}; //화살표 함수 

// 3. 활용 사례
function printName(person) {
  if (!person) { //값이 null, undefined가 아닌지 확인해줘야함
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);