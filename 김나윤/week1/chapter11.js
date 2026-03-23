// 함수

//중복으로 작성된 유사한 기능을 하는 코드를 묶어서 함수로

//함수선언
/*
function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting(); //함수 호출을 꼭 해줘야 실행됨.
console.log("호출 후 ");

*/

function getArea(width, height) {
  // 함수의 변수들을 매개변수라고 함.

  function another() {
    //중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값 = 합수 호출의 결과값
  console.log("hello"); // 함수는 return 문을 만나면 바로 종료됨. 그래서 이 코드는 실행 안됨
}

let area1 = getArea(10, 20); //함수를 호출하면서 전달된 값들을 각각 인수라 함.
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

//자바스크립트에서는 호출먼저하고 선언해도 오류 안남.
//-> 호이스팅 기능 때문.
//-> 끌어올리다 라는 뜻.
