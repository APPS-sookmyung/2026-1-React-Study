//단락 평가
// 단락 평가란 논리 연산자(||, &&)를 활용하여 조건문을 간결하게 표현하는 방법
// 논리 연산자는 첫번째 피연산자값만으로도 연산의 결과를 확정할 수 있다면 두번째 피연산자에는 접근조차 안함.


// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }
// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// console.log(returnFalse() && returnTrue());


// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name; //undefined 
  console.log(name || "person의 값이 없음");
  // undefined 즉, flasy한 값또는  truthy한 값이면 truthy한 값 반환
  // 둘다 truthy한 값이면 첫번째 truthy한 값 반환
}

printName();
printName({ name: "이정환" });