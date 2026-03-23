//자료형(타입) = 집합(동일한 속성을 가진 원소들까리 묶은 것 )


//원시타입 (기본형 타입: 프로그래밍에 있어 가장 기본적인 값들의 타입)
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// //기본적인 연산도 다 지원함.
// console.log(num1 +num1);
// console.log(num1 - num1);
// console.log(num1 * num1);
// console.log(num1 / num1);
// console.log(num1 % num1); // 나머지 연산 = 모듈러 연산

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; //음의 무한대 

let nan = NaN; // not a number. 수치연산 실패했을 때 결과값 ex. 1 * "hello"

// 2. String Type
let myName = "김나윤";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 백틱
//탬플릿 리터럴 문법 

// 3. Boolean Type 
//참 이거나  거짓 만을 저장하는 타입. 그래서 보통 상태를 나타낼 떄 사용
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
//undefined 라는 단 하나의 값만 포함
//변수를 선언하고 어떠한 초기화값 없으면 자동으로 할당됨.
//null은 명시적으로 변수에 할당해야함, 개발자들이 이 변수에 아무런 값도 없다고 직접적으로 표현할 떄 사용
//undefined는 변수를 미처 초기화하지 못했거나 존재하지 않는 값을 불러올 떄 발생하는 값
let none;
console.log(none);