//함수 표현식과 화살표 함수

// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// funA라는 함수를 호출해서 결과값을 변수에 당은게 아니라 이 함수 자체를 변수에 담음.
//자바스크립트에서는 함수도 숫자나 문자열처럼 하나의 값으로 취급
//->출력하면 함수 자체를 출력함.
varA();

let varB = function () {
  // 익명함수
  //   console.log("funcB");
};
//이것은 함수를 호출한게 아니라 값으로써 함수가 생성된 것이기 때문에 함수이름으로는 호출 불가
//->생성할 때 이름 생략해도 됨.
//호이스팅 불가

varB();

// 2. 화살표 함수
//-> 더 빠르고 간결하게 함수를 만들 수 있음

let varC1 = function () {
  return 1;
};

let varC2 = () => 1;

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
